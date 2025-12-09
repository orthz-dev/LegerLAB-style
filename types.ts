export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  link: string;
  image_link: string;
  availability: string;
  sku: string;
  // SEO Enhancement Fields
  handle?: string; // URL-friendly slug
  seo_title?: string;
  seo_description?: string;
  images?: string[]; // Multiple product images
  brand?: string;
  rating?: number;
  reviewCount?: number;
  metafields?: Record<string, any>;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export enum RoutePath {
  HOME = '/',
  COLLANT = '/collant',
  HOW_TO = '/come-si-usa',
  RETAILERS = '/lavora-con-noi',
  BLOG_DID_YOU_KNOW = '/lo-sapevi-che',
  BLOG_MAGAZINE = '/magazine',
  FAQ = '/faq',
  ORDER = '/ordine',
  ABOUT = '/about-us',
  PRIVACY = '/privacy-policy',
  SHIPPING = '/spedizioni-e-resi',
  THANK_YOU = '/grazie'
}