// Color Constants
export const COLORS = {
  primary: {
    DEFAULT: '#003876',
    dark: '#002855',
  },
  accent: {
    DEFAULT: '#F4C520',
    hover: '#FFD24D',
  },
  neutral: {
    white: '#FFFFFF',
    gray50: '#F9FAFB',
    gray200: '#E5E7EB',
    gray400: '#9CA3AF',
    gray600: '#4B5563',
    dark: '#1A1A1A',
  },
} as const;

// Typography
export const TYPOGRAPHY = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
  },
  fontSize: {
    hero: 'text-5xl sm:text-6xl lg:text-7xl',
    sectionHeading: 'text-4xl lg:text-5xl',
    subheading: 'text-xl sm:text-2xl',
    body: 'text-base',
    bodyLarge: 'text-lg',
    small: 'text-sm',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
} as const;

// Spacing
export const SPACING = {
  container: {
    maxWidth: 'max-w-7xl',
    padding: 'px-4 sm:px-6 lg:px-8',
  },
  section: {
    vertical: 'py-20 py-24',
    gap: 'gap-4 gap-8',
  },
} as const;

// Partner Data
export const PARTNERS = [
  {
    id: 1,
    name: 'Singapore Airlines',
    location: 'Singapore',
    aircraft: '150+ Aircraft',
  },
  {
    id: 2,
    name: 'Cathay Pacific Airways',
    location: 'Hong Kong',
    aircraft: '200+ Aircraft',
  },
  {
    id: 3,
    name: 'Qatar Airways',
    location: 'Qatar',
    aircraft: '250+ Aircraft',
  },
  {
    id: 4,
    name: 'Thai Airways International',
    location: 'Thailand',
    aircraft: '80+ Aircraft',
  },
  {
    id: 5,
    name: 'Air Niugini',
    location: 'Papua New Guinea',
    aircraft: '30+ Aircraft',
  },
] as const;

// Metrics Data
export const METRICS = [
  {
    id: 1,
    value: '17%',
    title: 'Average Cost Savings',
    description: 'Across all purchases',
    icon: 'dollar-sign',
  },
  {
    id: 2,
    value: '68%',
    title: 'Faster Procurement',
    description: '12 min vs 38 min manual',
    icon: 'clock',
  },
  {
    id: 3,
    value: '94%',
    title: 'Quote Response Rate',
    description: 'Within 2 hours',
    icon: 'trending-up',
  },
  {
    id: 4,
    value: '500+',
    title: 'Verified Suppliers',
    description: 'Global network',
    icon: 'users',
  },
] as const;

// Features Data
export const FEATURES = [
  {
    id: 1,
    title: 'AI-Powered RFQs',
    description: 'Upload PDFs, images, or voice notes. AI extracts part details automatically.',
    icon: 'sparkles',
  },
  {
    id: 2,
    title: 'Smart Quote Comparison',
    description: 'AI ranks quotes by price, delivery time, and supplier quality instantly.',
    icon: 'message-square',
  },
  {
    id: 3,
    title: 'Predictive Analytics',
    description: 'Know when you will need parts before AOG situations occur.',
    icon: 'chart-column',
  },
  {
    id: 4,
    title: 'FAA/EASA Certified',
    description: 'All suppliers verified with proper certifications and documentation.',
    icon: 'shield',
  },
  {
    id: 5,
    title: 'AOG Priority',
    description: 'Emergency parts delivered in hours with 24/7 priority support.',
    icon: 'zap',
  },
  {
    id: 6,
    title: 'Global Network',
    description: 'Access to 500+ suppliers across 180 countries with local inventory.',
    icon: 'globe',
  },
] as const;

// Navigation Links
export const NAV_LINKS = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources', hasDropdown: true },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  buyers: [
    { label: 'Search Parts', href: '#' },
    { label: 'AI RFQ Generator', href: '#' },
    { label: 'Quote Comparison', href: '#' },
    { label: 'Order Tracking', href: '#' },
    { label: 'AI Co-Pilot', href: '#' },
  ],
  suppliers: [
    { label: 'Supplier Dashboard', href: '#' },
    { label: 'My Store', href: '#' },
    { label: 'AI Auto-Quoting', href: '#' },
    { label: 'Inventory Management', href: '#' },
    { label: 'Business Analytics', href: '#' },
  ],
  resources: [
    { label: 'Pricing', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'API Documentation', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Contact Support', href: '#' },
    { label: 'Certifications', href: '#' },
  ],
} as const;

// Contact Information
export const CONTACT_INFO = {
  phone: '+1 (800) AVIOEMART',
  email: 'support@avioemart.com',
  locations: 'Singapore • Miami • London',
} as const;

