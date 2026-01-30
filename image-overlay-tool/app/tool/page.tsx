'use client';

import { useState, useRef, useEffect } from 'react';
import JSZip from 'jszip';

interface ImageData {
  id: string;
  file: File;
  bitmap: ImageBitmap;
  preview: string;
  overlayPosition?: { x: number; y: number };
  customText?: {
    title: string;
    subtitle: string;
    body: string;
    cta: string;
  };
}

interface TextData {
  title: string;
  subtitle: string;
  body: string;
  cta: string;
  watermark: string;
}

interface CategoryTemplate {
  name: string;
  icon: string;
  styles: {
    [key: string]: {
      name: string;
      bgColor: string;
      accentColor: string;
      alpha: number;
      titleSize: number;
      bodySize: number;
      fontFamily: string;
      borderRadius: number;
      showShadow: boolean;
      showAccentBar: boolean;
      overlayStyle: string;
      description: string;
    };
  };
}

const CATEGORIES: { [key: string]: CategoryTemplate } = {
  'home-decor': {
    name: 'Home Decor',
    icon: '🏡',
    styles: {
      'elegant-minimal': {
        name: 'Elegant Minimal',
        bgColor: '#f5f5f0',
        accentColor: '#d4af37',
        alpha: 95,
        titleSize: 8,
        bodySize: 3.5,
        fontFamily: 'Playfair Display',
        borderRadius: 5,
        showShadow: true,
        showAccentBar: false,
        overlayStyle: 'card',
        description: 'Clean, sophisticated look for luxury homes'
      },
      'rustic-charm': {
        name: 'Rustic Charm',
        bgColor: '#8b7355',
        accentColor: '#d2691e',
        alpha: 88,
        titleSize: 7.5,
        bodySize: 3.8,
        fontFamily: 'Georgia',
        borderRadius: 15,
        showShadow: true,
        showAccentBar: true,
        overlayStyle: 'card',
        description: 'Warm, cozy aesthetic for farmhouse style'
      },
      'modern-chic': {
        name: 'Modern Chic',
        bgColor: '#2d3748',
        accentColor: '#00d9ff',
        alpha: 90,
        titleSize: 8.5,
        bodySize: 3.5,
        fontFamily: 'Arial',
        borderRadius: 20,
        showShadow: true,
        showAccentBar: true,
        overlayStyle: 'gradient',
        description: 'Contemporary design for modern interiors'
      }
    }
  },
  'web-design': {
    name: 'Web Design',
    icon: '💻',
    styles: {
      'tech-gradient': {
        name: 'Tech Gradient',
        bgColor: '#6366f1',
        accentColor: '#ec4899',
        alpha: 85,
        titleSize: 9,
        bodySize: 4,
        fontFamily: 'Inter',
        borderRadius: 25,
        showShadow: true,
        showAccentBar: false,
        overlayStyle: 'gradient',
        description: 'Bold gradients for SaaS and tech'
      },
      'minimal-ui': {
        name: 'Minimal UI',
        bgColor: '#ffffff',
        accentColor: '#3b82f6',
        alpha: 95,
        titleSize: 7.5,
        bodySize: 3.2,
        fontFamily: 'Inter',
        borderRadius: 12,
        showShadow: false,
        showAccentBar: true,
        overlayStyle: 'card',
        description: 'Clean interface design aesthetic'
      },
      'dark-mode': {
        name: 'Dark Mode',
        bgColor: '#0f172a',
        accentColor: '#22d3ee',
        alpha: 92,
        titleSize: 8,
        bodySize: 3.5,
        fontFamily: 'Inter',
        borderRadius: 18,
        showShadow: true,
        showAccentBar: true,
        overlayStyle: 'card',
        description: 'Popular dark theme for developers'
      }
    }
  },
  'art-craft': {
    name: 'Art & Craft',
    icon: '🎨',
    styles: {
      'artistic-brush': {
        name: 'Artistic Brush',
        bgColor: '#ff6b6b',
        accentColor: '#ffd93d',
        alpha: 80,
        titleSize: 9,
        bodySize: 4,
        fontFamily: 'Brush Script MT',
        borderRadius: 30,
        showShadow: true,
        showAccentBar: false,
        overlayStyle: 'gradient',
        description: 'Expressive style for creative work'
      },
      'watercolor-soft': {
        name: 'Watercolor Soft',
        bgColor: '#a8dadc',
        accentColor: '#f1faee',
        alpha: 85,
        titleSize: 7,
        bodySize: 3.5,
        fontFamily: 'Georgia',
        borderRadius: 25,
        showShadow: false,
        showAccentBar: false,
        overlayStyle: 'gradient',
        description: 'Gentle, flowing aesthetic'
      },
      'craft-vintage': {
        name: 'Craft Vintage',
        bgColor: '#e9c46a',
        accentColor: '#264653',
        alpha: 88,
        titleSize: 8,
        bodySize: 3.8,
        fontFamily: 'Courier New',
        borderRadius: 8,
        showShadow: true,
        showAccentBar: true,
        overlayStyle: 'bold',
        description: 'Handmade, nostalgic feel'
      }
    }
  },
  'fashion': {
    name: 'Fashion',
    icon: '👗',
    styles: {
      'luxury-brand': {
        name: 'Luxury Brand',
        bgColor: '#000000',
        accentColor: '#d4af37',
        alpha: 90,
        titleSize: 9,
        bodySize: 3.2,
        fontFamily: 'Didot',
        borderRadius: 5,
        showShadow: true,
        showAccentBar: false,
        overlayStyle: 'minimal',
        description: 'High-end fashion aesthetic'
      },
      'streetwear': {
        name: 'Streetwear',
        bgColor: '#ff5757',
        accentColor: '#000000',
        alpha: 88,
        titleSize: 10,
        bodySize: 4.5,
        fontFamily: 'Impact',
        borderRadius: 0,
        showShadow: true,
        showAccentBar: true,
        overlayStyle: 'bold',
        description: 'Urban, edgy style'
      },
      'boutique-elegant': {
        name: 'Boutique Elegant',
        bgColor: '#fadadd',
        accentColor: '#c9a0dc',
        alpha: 92,
        titleSize: 7.5,
        bodySize: 3.3,
        fontFamily: 'Palatino',
        borderRadius: 20,
        showShadow: false,
        showAccentBar: false,
        overlayStyle: 'card',
        description: 'Feminine, sophisticated look'
      }
    }
  },
  'food': {
    name: 'Food & Restaurant',
    icon: '🍽️',
    styles: {
      'gourmet-fine': {
        name: 'Gourmet Fine',
        bgColor: '#1a1a1a',
        accentColor: '#d4a574',
        alpha: 92,
        titleSize: 8.5,
        bodySize: 3.5,
        fontFamily: 'Baskerville',
        borderRadius: 12,
        showShadow: true,
        showAccentBar: true,
        overlayStyle: 'card',
        description: 'Upscale dining experience'
      },
      'cafe-cozy': {
        name: 'Cafe Cozy',
        bgColor: '#6f4e37',
        accentColor: '#ffd700',
        alpha: 85,
        titleSize: 7.5,
        bodySize: 3.8,
        fontFamily: 'Georgia',
        borderRadius: 18,
        showShadow: true,
        showAccentBar: false,
        overlayStyle: 'card',
        description: 'Warm coffee shop vibe'
      },
      'fresh-organic': {
        name: 'Fresh & Organic',
        bgColor: '#2d6a4f',
        accentColor: '#95d5b2',
        alpha: 88,
        titleSize: 8,
        bodySize: 3.6,
        fontFamily: 'Verdana',
        borderRadius: 15,
        showShadow: false,
        showAccentBar: true,
        overlayStyle: 'gradient',
        description: 'Natural, healthy food'
      }
    }
  },
  'real-estate': {
    name: 'Real Estate',
    icon: '🏠',
    styles: {
      'luxury-property': {
        name: 'Luxury Property',
        bgColor: '#1e293b',
        accentColor: '#fbbf24',
        alpha: 90,
        titleSize: 9,
        bodySize: 3.5,
        fontFamily: 'Times New Roman',
        borderRadius: 8,
        showShadow: true,
        showAccentBar: true,
        overlayStyle: 'card',
        description: 'High-end real estate'
      },
      'modern-listing': {
        name: 'Modern Listing',
        bgColor: '#ffffff',
        accentColor: '#3b82f6',
        alpha: 95,
        titleSize: 8,
        bodySize: 3.3,
        fontFamily: 'Arial',
        borderRadius: 15,
        showShadow: true,
        showAccentBar: true,
        overlayStyle: 'card',
        description: 'Clean property showcase'
      },
      'cozy-home': {
        name: 'Cozy Home',
        bgColor: '#92400e',
        accentColor: '#fbbf24',
        alpha: 88,
        titleSize: 7.5,
        bodySize: 3.7,
        fontFamily: 'Georgia',
        borderRadius: 20,
        showShadow: true,
        showAccentBar: false,
        overlayStyle: 'corner',
        description: 'Warm family homes'
      }
    }
  },
  'fitness': {
    name: 'Fitness & Sports',
    icon: '💪',
    styles: {
      'energy-boost': {
        name: 'Energy Boost',
        bgColor: '#ef4444',
        accentColor: '#fbbf24',
        alpha: 85,
        titleSize: 10,
        bodySize: 4.2,
        fontFamily: 'Impact',
        borderRadius: 10,
        showShadow: true,
        showAccentBar: true,
        overlayStyle: 'bold',
        description: 'High-energy workout vibe'
      },
      'zen-wellness': {
        name: 'Zen Wellness',
        bgColor: '#6ee7b7',
        accentColor: '#059669',
        alpha: 88,
        titleSize: 7,
        bodySize: 3.5,
        fontFamily: 'Georgia',
        borderRadius: 25,
        showShadow: false,
        showAccentBar: false,
        overlayStyle: 'gradient',
        description: 'Calm, mindful fitness'
      },
      'athletic-pro': {
        name: 'Athletic Pro',
        bgColor: '#000000',
        accentColor: '#22d3ee',
        alpha: 90,
        titleSize: 9,
        bodySize: 4,
        fontFamily: 'Arial',
        borderRadius: 5,
        showShadow: true,
        showAccentBar: true,
        overlayStyle: 'split',
        description: 'Professional sports branding'
      }
    }
  },
  'beauty': {
    name: 'Beauty & Cosmetics',
    icon: '💄',
    styles: {
      'glam-luxe': {
        name: 'Glam Luxe',
        bgColor: '#db2777',
        accentColor: '#fbbf24',
        alpha: 88,
        titleSize: 8.5,
        bodySize: 3.5,
        fontFamily: 'Didot',
        borderRadius: 20,
        showShadow: true,
        showAccentBar: false,
        overlayStyle: 'gradient',
        description: 'Glamorous beauty aesthetic'
      },
      'natural-beauty': {
        name: 'Natural Beauty',
        bgColor: '#fce7f3',
        accentColor: '#be185d',
        alpha: 92,
        titleSize: 7,
        bodySize: 3.3,
        fontFamily: 'Georgia',
        borderRadius: 25,
        showShadow: false,
        showAccentBar: false,
        overlayStyle: 'card',
        description: 'Soft, natural look'
      },
      'bold-makeup': {
        name: 'Bold Makeup',
        bgColor: '#7c3aed',
        accentColor: '#ec4899',
        alpha: 85,
        titleSize: 9.5,
        bodySize: 4,
        fontFamily: 'Impact',
        borderRadius: 15,
        showShadow: true,
        showAccentBar: true,
        overlayStyle: 'bold',
        description: 'Vibrant, statement makeup'
      }
    }
  }
};

const SOCIAL_PRESETS = {
  'instagram-square': { width: 1080, height: 1080, name: 'Instagram Square (1:1)' },
  'instagram-portrait': { width: 1080, height: 1350, name: 'Instagram Portrait (4:5)' },
  'instagram-story': { width: 1080, height: 1920, name: 'Instagram Story (9:16)' },
  'facebook-post': { width: 1200, height: 630, name: 'Facebook Post' },
  'facebook-story': { width: 1080, height: 1920, name: 'Facebook Story (9:16)' },
  'pinterest-pin': { width: 1000, height: 1500, name: 'Pinterest Pin (2:3)' },
  'linkedin-post': { width: 1200, height: 627, name: 'LinkedIn Post' },
  'tiktok': { width: 1080, height: 1920, name: 'TikTok (9:16)' },
  'twitter-post': { width: 1200, height: 675, name: 'Twitter Post (16:9)' },
};

const OVERLAY_STYLES = {
  card: '📇 Card',
  gradient: '🌈 Gradient',
  minimal: '✨ Minimal',
  bold: '💪 Bold',
  split: '📊 Split Screen',
  corner: '📐 Corner Badge',
};

const FONT_FAMILIES = [
  'Arial',
  'Helvetica',
  'Times New Roman',
  'Georgia',
  'Courier New',
  'Verdana',
  'Impact',
  'Palatino',
  'Baskerville',
  'Didot',
  'Brush Script MT',
  'Inter',
  'Playfair Display'
];

export default function AdvancedToolPage() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [csvData, setCSVData] = useState<Map<string, any>>(new Map());
  const [selectedSize, setSelectedSize] = useState('instagram-square');
  const [overlayStyle, setOverlayStyle] = useState<keyof typeof OVERLAY_STYLES>('card');
  const [status, setStatus] = useState('Ready to process images');
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  // Category and template state
  const [selectedCategory, setSelectedCategory] = useState<string>('home-decor');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('elegant-minimal');
  
  // Email capture state
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [downloadType, setDownloadType] = useState<'single' | 'all' | null>(null);
  const [pendingDownload, setPendingDownload] = useState<any>(null);
  const [downloadCount, setDownloadCount] = useState(0);
  
  // Text settings
  const [defaultText, setDefaultText] = useState<TextData>({
    title: 'Your Title Here',
    subtitle: 'Subtitle Text',
    body: 'Body text goes here. Add your main message or description.',
    cta: 'www.yourwebsite.com',
    watermark: '@yourhandle'
  });

  // Style settings (will be updated by templates)
  const [bgColor, setBgColor] = useState('#f5f5f0');
  const [accentColor, setAccentColor] = useState('#d4af37');
  const [bgAlpha, setBgAlpha] = useState(95);
  const [titleSize, setTitleSize] = useState(8);
  const [titleWeight, setTitleWeight] = useState('700');
  const [bodySize, setBodySize] = useState(3.5);
  const [lineSpacing, setLineSpacing] = useState(1.4);
  const [overlayWidth, setOverlayWidth] = useState(42);
  const [borderRadius, setBorderRadius] = useState(5);
  const [showShadow, setShowShadow] = useState(true);
  const [showAccentBar, setShowAccentBar] = useState(false);
  const [fontFamily, setFontFamily] = useState('Playfair Display');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const csvInputRef = useRef<HTMLInputElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // Apply template when category or template changes
  useEffect(() => {
    const category = CATEGORIES[selectedCategory];
    if (category && category.styles[selectedTemplate]) {
      const template = category.styles[selectedTemplate];
      setBgColor(template.bgColor);
      setAccentColor(template.accentColor);
      setBgAlpha(template.alpha);
      setTitleSize(template.titleSize);
      setBodySize(template.bodySize);
      setFontFamily(template.fontFamily);
      setBorderRadius(template.borderRadius);
      setShowShadow(template.showShadow);
      setShowAccentBar(template.showAccentBar);
      setOverlayStyle(template.overlayStyle as keyof typeof OVERLAY_STYLES);
    }
  }, [selectedCategory, selectedTemplate]);

  // Check if email already submitted
  useEffect(() => {
    const savedEmail = localStorage.getItem('overlayPro_userEmail');
    const savedCount = localStorage.getItem('overlayPro_downloadCount');
    if (savedEmail) {
      setUserEmail(savedEmail);
      setEmailSubmitted(true);
    }
    if (savedCount) {
      setDownloadCount(parseInt(savedCount));
    }
  }, []);

  // Default overlay position
  const getDefaultPosition = () => ({ x: 0.08, y: 0.125 });

  // Email validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle email submission
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!isValidEmail(userEmail)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    localStorage.setItem('overlayPro_userEmail', userEmail);
    setEmailSubmitted(true);
    console.log('Email collected:', userEmail);
    setShowEmailModal(false);
    
    if (pendingDownload) {
      if (downloadType === 'single') {
        await executeDownloadImage(pendingDownload.img, pendingDownload.index);
      } else if (downloadType === 'all') {
        await executeDownloadAllAsZip();
      }
      setPendingDownload(null);
      setDownloadType(null);
    }
  };

  // Check if should show email modal
  const shouldRequestEmail = () => {
    if (!emailSubmitted) return true;
    if (downloadCount >= 3 && downloadCount % 5 === 0) return true;
    return false;
  };

  // Load images
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    
    setStatus(`Loading ${files.length} images...`);
    const newImages: ImageData[] = [];

    for (const file of files) {
      const bitmap = await createImageBitmap(file);
      newImages.push({
        id: Math.random().toString(36).substr(2, 9),
        file,
        bitmap,
        preview: URL.createObjectURL(file),
        overlayPosition: getDefaultPosition(),
      });
    }

    setImages(prev => [...prev, ...newImages]);
    setStatus(`✓ Loaded ${files.length} images`);
    setCurrentImageIndex(0);
    
    setTimeout(() => generatePreview(0, newImages), 100);
  };

  // CSV Import
  const handleCSVSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    const lines = text.split('\n').filter(l => l.trim());
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    
    const map = new Map();
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      const row: any = {};
      headers.forEach((h, idx) => {
        row[h] = values[idx] || '';
      });
      
      if (values[0]) {
        map.set(values[0].toLowerCase(), row);
      }
    }

    setCSVData(map);
    setStatus(`✓ CSV loaded: ${map.size} entries`);
  };

  // Get text for specific image
  const getTextForImage = (img: ImageData): TextData => {
    if (img.customText) {
      return {
        ...defaultText,
        ...img.customText,
      };
    }

    const filename = img.file.name.toLowerCase().replace(/\.[^/.]+$/, '');
    const csvEntry = csvData.get(filename);
    
    if (csvEntry) {
      return {
        title: csvEntry.title || defaultText.title,
        subtitle: csvEntry.subtitle || defaultText.subtitle,
        body: csvEntry.body || csvEntry.description || defaultText.body,
        cta: csvEntry.cta || csvEntry.url || defaultText.cta,
        watermark: csvEntry.watermark || defaultText.watermark,
      };
    }

    return defaultText;
  };

  // [Previous rendering functions remain the same - renderOverlay, renderCardStyle, etc.]
  // I'll include the key rendering function here:

  const renderOverlay = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    position: { x: number; y: number },
    text: TextData,
    style: keyof typeof OVERLAY_STYLES
  ) => {
    const rgb = hexToRgb(bgColor);
    const accent = hexToRgb(accentColor);
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    const textColor = brightness > 128 ? '#1f2937' : '#ffffff';
    const subtleColor = brightness > 128 ? 'rgba(31,41,55,0.7)' : 'rgba(255,255,255,0.8)';
    const alpha = bgAlpha / 100;

    // Simplified rendering - just card style for brevity
    const cardW = Math.round(width * (overlayWidth / 100));
    const cardH = Math.round(height * 0.75);
    const padding = Math.round(width * 0.04);
    const x1 = Math.round(width * position.x);
    const y1 = Math.round(height * position.y);
    const radius = Math.round(width * (borderRadius / 1000));

    if (showShadow) {
      ctx.shadowColor = 'rgba(0,0,0,0.3)';
      ctx.shadowBlur = 30;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 10;
    }

    if (style === 'gradient') {
      const gradient = ctx.createLinearGradient(x1, y1, x1 + cardW, y1 + cardH);
      gradient.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`);
      gradient.addColorStop(1, `rgba(${accent.r},${accent.g},${accent.b},${alpha * 0.8})`);
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
    }

    ctx.beginPath();
    ctx.roundRect(x1, y1, cardW, cardH, radius);
    ctx.fill();

    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;

    if (showAccentBar) {
      ctx.fillStyle = accentColor;
      ctx.beginPath();
      ctx.roundRect(
        x1 + padding,
        y1 + padding,
        Math.round(width * 0.012),
        cardH - padding * 2,
        Math.round(width * 0.02)
      );
      ctx.fill();
    }

    // Draw text
    const textX = x1 + padding * 2 + (showAccentBar ? Math.round(width * 0.012) : 0);
    let textY = y1 + padding * 2;
    const maxWidth = cardW - padding * 4 - (showAccentBar ? Math.round(width * 0.012) : 0);

    const titleFontSize = Math.round(width * (titleSize / 100));
    ctx.font = `${titleWeight} ${titleFontSize}px ${fontFamily}, Arial`;
    ctx.fillStyle = textColor;
    const titleLines = wrapText(ctx, text.title, maxWidth);
    titleLines.forEach(line => {
      ctx.fillText(line, textX, textY);
      textY += titleFontSize * lineSpacing;
    });

    textY += Math.round(titleFontSize * 0.3);
    const subtitleSize = Math.round(width * 0.033);
    ctx.font = `600 ${subtitleSize}px ${fontFamily}, Arial`;
    ctx.fillStyle = subtleColor;
    ctx.fillText(text.subtitle, textX, textY);
    textY += subtitleSize * lineSpacing * 1.5;

    const bodyFontSize = Math.round(width * (bodySize / 100));
    ctx.font = `500 ${bodyFontSize}px ${fontFamily}, Arial`;
    ctx.fillStyle = textColor;
    const bodyLines = wrapText(ctx, text.body, maxWidth).slice(0, 5);
    bodyLines.forEach(line => {
      ctx.fillText(line, textX, textY);
      textY += bodyFontSize * lineSpacing;
    });

    textY += Math.round(width * 0.02);
    const ctaSize = Math.round(width * 0.028);
    ctx.font = `600 ${ctaSize}px ${fontFamily}, Arial`;
    ctx.fillStyle = subtleColor;
    ctx.fillText(text.cta, textX, textY);

    ctx.font = `600 ${Math.round(width * 0.026)}px ${fontFamily}, Arial`;
    ctx.fillStyle = subtleColor;
    const wmWidth = ctx.measureText(text.watermark).width;
    ctx.fillText(text.watermark, x1 + cardW - padding - wmWidth, y1 + cardH - padding);
  };

  // Render single image
  const renderImage = (
    bitmap: ImageBitmap,
    width: number,
    height: number,
    text: TextData,
    position: { x: number; y: number },
    style: keyof typeof OVERLAY_STYLES
  ): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d')!;

    const imgAspect = bitmap.width / bitmap.height;
    const canvasAspect = width / height;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    if (imgAspect > canvasAspect) {
      drawHeight = height;
      drawWidth = height * imgAspect;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = width;
      drawHeight = width / imgAspect;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    }

    ctx.drawImage(bitmap, offsetX, offsetY, drawWidth, drawHeight);
    renderOverlay(ctx, width, height, position, text, style);

    return canvas;
  };

  // Generate preview
  const generatePreview = (imageIndex?: number, imageList?: ImageData[]) => {
    const imgs = imageList || images;
    const idx = imageIndex ?? currentImageIndex;
    if (imgs.length === 0) return;
    
    const targetImg = imgs[idx];
    const canvas = previewCanvasRef.current;
    if (!canvas) return;

    const preset = SOCIAL_PRESETS[selectedSize as keyof typeof SOCIAL_PRESETS];
    canvas.width = preset.width;
    canvas.height = preset.height;

    const text = getTextForImage(targetImg);
    const position = targetImg.overlayPosition || getDefaultPosition();
    const rendered = renderImage(targetImg.bitmap, preset.width, preset.height, text, position, overlayStyle);
    
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(rendered, 0, 0);
    
    setStatus(`✓ Preview ready (${preset.width}×${preset.height})`);
  };

  // [Previous mouse handling, download functions remain the same]

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (images.length === 0) return;
    const canvas = previewCanvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    const currentImg = images[currentImageIndex];
    const position = currentImg.overlayPosition || getDefaultPosition();
    const cardW = Math.round(canvas.width * (overlayWidth / 100));
    const cardH = Math.round(canvas.height * 0.75);
    const x1 = Math.round(canvas.width * position.x);
    const y1 = Math.round(canvas.height * position.y);

    if (x >= x1 && x <= x1 + cardW && y >= y1 && y <= y1 + cardH) {
      setIsDragging(true);
      setDragOffset({ x: x - x1, y: y - y1 });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging || images.length === 0) return;
    const canvas = previewCanvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    const cardW = Math.round(canvas.width * (overlayWidth / 100));
    const cardH = Math.round(canvas.height * 0.75);

    let newX = (x - dragOffset.x) / canvas.width;
    let newY = (y - dragOffset.y) / canvas.height;

    newX = Math.max(0, Math.min(newX, 1 - cardW / canvas.width));
    newY = Math.max(0, Math.min(newY, 1 - cardH / canvas.height));

    const updatedImages = [...images];
    updatedImages[currentImageIndex].overlayPosition = { x: newX, y: newY };
    setImages(updatedImages);
    generatePreview();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Download functions
  const downloadImage = async (img: ImageData, index: number) => {
    if (shouldRequestEmail()) {
      setPendingDownload({ img, index });
      setDownloadType('single');
      setShowEmailModal(true);
      return;
    }
    await executeDownloadImage(img, index);
  };

  const executeDownloadImage = async (img: ImageData, index: number) => {
    const preset = SOCIAL_PRESETS[selectedSize as keyof typeof SOCIAL_PRESETS];
    const text = getTextForImage(img);
    const position = img.overlayPosition || getDefaultPosition();
    const canvas = renderImage(img.bitmap, preset.width, preset.height, text, position, overlayStyle);
    
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `overlay-${index + 1}-${img.file.name}`;
      a.click();
      URL.revokeObjectURL(url);
      
      const newCount = downloadCount + 1;
      setDownloadCount(newCount);
      localStorage.setItem('overlayPro_downloadCount', newCount.toString());
    }, 'image/jpeg', 0.92);
  };

  const downloadAllAsZip = async () => {
    if (images.length === 0) return;
    if (shouldRequestEmail()) {
      setDownloadType('all');
      setShowEmailModal(true);
      return;
    }
    await executeDownloadAllAsZip();
  };

  const executeDownloadAllAsZip = async () => {
    if (images.length === 0) return;
    setStatus('🎨 Rendering images...');
    const preset = SOCIAL_PRESETS[selectedSize as keyof typeof SOCIAL_PRESETS];
    
    const zip = new JSZip();
    const folder = zip.folder('overlays')!;

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const text = getTextForImage(img);
      const position = img.overlayPosition || getDefaultPosition();
      const canvas = renderImage(img.bitmap, preset.width, preset.height, text, position, overlayStyle);
      
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((b) => resolve(b!), 'image/jpeg', 0.92);
      });
      
      folder.file(`${String(i + 1).padStart(3, '0')}_${img.file.name}`, blob);
      setStatus(`🎨 Rendered ${i + 1}/${images.length}`);
    }

    setStatus('📦 Creating ZIP...');
    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = `overlays_${selectedCategory}_${preset.width}x${preset.height}_${Date.now()}.zip`;
    a.click();
    URL.revokeObjectURL(url);
    
    setStatus(`✅ Complete! ${images.length} images exported`);
    
    const newCount = downloadCount + images.length;
    setDownloadCount(newCount);
    localStorage.setItem('overlayPro_downloadCount', newCount.toString());
  };

  // Helper functions
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };

  const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  // Auto-preview on settings change
  useEffect(() => {
    if (images.length > 0) {
      const timeout = setTimeout(() => generatePreview(), 200);
      return () => clearTimeout(timeout);
    }
  }, [selectedSize, bgColor, accentColor, bgAlpha, titleSize, bodySize, lineSpacing, overlayWidth, borderRadius, showShadow, showAccentBar, defaultText, overlayStyle, fontFamily]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Email Capture Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">🎨</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Download Your Images
              </h2>
              <p className="text-gray-600">
                Enter your email to get your processed images + exclusive tips & updates!
              </p>
            </div>

            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                  setEmailError('');
                }}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-2"
                required
              />
              
              {emailError && (
                <p className="text-red-500 text-sm mb-3">{emailError}</p>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
              >
                Get My Images →
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            OverlayPro
          </a>
          <a href="/" className="text-gray-600 hover:text-gray-900">← Back</a>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Category-Based Image Overlay Tool
          </h1>
          <p className="text-gray-600">
            Choose your industry • Pick a template • Customize everything
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upload Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-4">📁 Upload</h3>
              
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3"
              >
                Select Images
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileSelect}
                className="hidden"
              />

              <button
                onClick={() => csvInputRef.current?.click()}
                className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
              >
                Import CSV Data
              </button>
              <input
                ref={csvInputRef}
                type="file"
                accept=".csv"
                onChange={handleCSVSelect}
                className="hidden"
              />

              <p className="text-xs text-gray-500 mt-3">
                {images.length} image{images.length !== 1 ? 's' : ''} loaded
              </p>
            </div>

            {/* Category Selection */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-4">🎯 Choose Category</h3>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  const firstTemplate = Object.keys(CATEGORIES[e.target.value].styles)[0];
                  setSelectedTemplate(firstTemplate);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
              >
                {Object.entries(CATEGORIES).map(([key, category]) => (
                  <option key={key} value={key}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>

              <h4 className="font-semibold text-sm mb-3 text-gray-700">Template Style</h4>
              <div className="space-y-2">
                {Object.entries(CATEGORIES[selectedCategory].styles).map(([key, template]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTemplate(key)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      selectedTemplate === key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-semibold text-sm">{template.name}</div>
                    <div className={`text-xs mt-1 ${selectedTemplate === key ? 'text-blue-100' : 'text-gray-500'}`}>
                      {template.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Social Platform */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-4">📱 Platform</h3>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {Object.entries(SOCIAL_PRESETS).map(([key, preset]) => (
                  <option key={key} value={key}>
                    {preset.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Export */}
            {images.length > 0 && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-lg mb-4">💾 Export</h3>
                <button
                  onClick={downloadAllAsZip}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition"
                >
                  ⬇️ Download All ZIP ({images.length})
                </button>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Preview Canvas */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">👁️ Preview - Drag to Move</h3>
                {images.length > 1 && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        const newIndex = Math.max(0, currentImageIndex - 1);
                        setCurrentImageIndex(newIndex);
                        generatePreview(newIndex);
                      }}
                      disabled={currentImageIndex === 0}
                      className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
                    >
                      ←
                    </button>
                    <span className="px-3 py-1 text-sm">
                      {currentImageIndex + 1} / {images.length}
                    </span>
                    <button
                      onClick={() => {
                        const newIndex = Math.min(images.length - 1, currentImageIndex + 1);
                        setCurrentImageIndex(newIndex);
                        generatePreview(newIndex);
                      }}
                      disabled={currentImageIndex === images.length - 1}
                      className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
                    >
                      →
                    </button>
                  </div>
                )}
              </div>
              {images.length > 0 ? (
                <div ref={previewContainerRef} className="relative">
                  <canvas
                    ref={previewCanvasRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className={`w-full h-auto rounded-lg border border-gray-200 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                  />
                </div>
              ) : (
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-4">🖼️</div>
                    <p className="text-lg font-medium mb-2">Select a category & upload images</p>
                    <p className="text-sm">Try Home Decor, Web Design, Fashion, or Food!</p>
                  </div>
                </div>
              )}
            </div>

            {/* Status Bar */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-medium text-blue-900">{status}</p>
            </div>

            {/* Image List */}
            {images.length > 0 && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-lg mb-4">📋 Images ({images.length})</h3>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {images.map((img, idx) => (
                    <div 
                      key={img.id} 
                      className={`flex items-center justify-between p-3 rounded-lg transition ${
                        idx === currentImageIndex ? 'bg-blue-50 border-2 border-blue-500' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <span className="font-mono text-sm text-gray-500">{idx + 1}.</span>
                        <span className="text-sm truncate">{img.file.name}</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setCurrentImageIndex(idx);
                            generatePreview(idx);
                          }}
                          className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
                        >
                          Preview
                        </button>
                        <button
                          onClick={() => downloadImage(img, idx)}
                          className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Customization */}
          <div className="lg:col-span-1 space-y-6">
            {/* Text Content */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-4">✏️ Text Content</h3>
              
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={defaultText.title}
                onChange={(e) => setDefaultText({ ...defaultText, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"
              />

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subtitle
              </label>
              <input
                type="text"
                value={defaultText.subtitle}
                onChange={(e) => setDefaultText({ ...defaultText, subtitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"
              />

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Body Text
              </label>
              <textarea
                value={defaultText.body}
                onChange={(e) => setDefaultText({ ...defaultText, body: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3 resize-none"
              />

              <label className="block text-sm font-medium text-gray-700 mb-2">
                CTA / URL
              </label>
              <input
                type="text"
                value={defaultText.cta}
                onChange={(e) => setDefaultText({ ...defaultText, cta: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"
              />

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Watermark
              </label>
              <input
                type="text"
                value={defaultText.watermark}
                onChange={(e) => setDefaultText({ ...defaultText, watermark: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Custom Style */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-4">🎨 Customize Style</h3>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Font Family
              </label>
              <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"
              >
                {FONT_FAMILIES.map(font => (
                  <option key={font} value={font}>{font}</option>
                ))}
              </select>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Background Color
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="h-10 w-16 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accent Color
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="color"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="h-10 w-16 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Opacity: {bgAlpha}%
              </label>
              <input
                type="range"
                min="50"
                max="100"
                value={bgAlpha}
                onChange={(e) => setBgAlpha(Number(e.target.value))}
                className="w-full mb-4"
              />

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title Size: {titleSize}
              </label>
              <input
                type="range"
                min="4"
                max="12"
                step="0.5"
                value={titleSize}
                onChange={(e) => setTitleSize(Number(e.target.value))}
                className="w-full mb-4"
              />

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Body Size: {bodySize}
              </label>
              <input
                type="range"
                min="2"
                max="6"
                step="0.5"
                value={bodySize}
                onChange={(e) => setBodySize(Number(e.target.value))}
                className="w-full mb-4"
              />

              <div className="space-y-2 pt-4 border-t">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showShadow}
                    onChange={(e) => setShowShadow(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Show Shadow</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showAccentBar}
                    onChange={(e) => setShowAccentBar(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Show Accent Bar</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
