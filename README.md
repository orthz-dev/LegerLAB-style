# LegerLAB - SEO Optimized E-Commerce Platform

> **Collant Drenante Anticellulite** - Trattamenti corpo professionali a casa tua

## 🚀 Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Generate sitemap
npm run generate-sitemap

# Optimize images
npm run optimize-images
```

## 📋 Project Overview

LegerLAB is a modern, SEO-optimized React e-commerce application built with:

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing with SEO-friendly URLs
- **React Helmet Async** - Dynamic meta tag management

## 🎯 SEO Features

### ✅ Implemented

- **Clean URLs**: BrowserRouter for SEO-friendly routes (no hash fragments)
- **Dynamic Meta Tags**: Unique titles, descriptions, and Open Graph tags per page
- **Structured Data**: JSON-LD schemas for Organization, Products, and Breadcrumbs
- **Sitemap**: Auto-generated XML sitemap with all pages and products
- **Robots.txt**: Proper crawling directives for search engines
- **PWA Manifest**: Progressive Web App capabilities
- **Performance**: Code splitting, preconnect, and optimized builds
- **Shopify Ready**: Integration preparation and documentation

### 📊 SEO Score Targets

- **Performance**: >90
- **SEO**: 100
- **Best Practices**: >90
- **Accessibility**: >90

## 📁 Project Structure

```
LegerLAB-com/
├── assets/              # Images, fonts, and media
├── components/          # React components
│   ├── seo/            # SEO-specific components
│   ├── product/        # Product components
│   └── PageWrapper.tsx # Automatic SEO wrapper
├── config/             # Configuration files
├── data/               # Product data and SEO metadata
├── pages/              # Page components
├── public/             # Static files (robots.txt, sitemap.xml)
├── scripts/            # Build and optimization scripts
├── shopify/            # Shopify theme files
└── utils/              # Utility functions
```

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run generate-sitemap` | Generate sitemap.xml |
| `npm run optimize-images` | Optimize images to WebP |
| `npm run seo-check` | Build + generate sitemap |

### Adding SEO to Pages

Wrap your page components with `PageWrapper`:

```tsx
import PageWrapper from '../components/PageWrapper';

const MyPage = () => (
  <PageWrapper 
    includeOrganizationSchema={true}
    includeWebSiteSchema={true}
  >
    {/* Your content */}
  </PageWrapper>
);
```

See [SEO_INTEGRATION_GUIDE.md](./SEO_INTEGRATION_GUIDE.md) for detailed instructions.

## 📦 Dependencies

### Production
- `react` ^19.2.0
- `react-dom` ^19.2.0
- `react-router-dom` ^7.9.6
- `react-helmet-async` ^2.0.4

### Development
- `vite` ^6.2.0
- `typescript` ~5.8.2
- `sharp` ^0.33.0 (image optimization)
- `sitemap` ^8.0.0 (sitemap generation)
- `tsx` ^4.7.0 (TypeScript execution)

## 🔍 SEO Configuration

### Metadata Configuration

Edit `data/seo-metadata.json` to customize:
- Page titles and descriptions
- Keywords
- Open Graph images
- Canonical URLs

### Site-wide Settings

Edit `config/seo.config.ts` for:
- Site name and URL
- Default metadata
- Social media handles
- Organization information
- Google Analytics ID

## 🛒 Shopify Integration

See [shopify/README.md](./shopify/README.md) for:
- Headless Shopify setup
- Storefront API integration
- Theme deployment
- Metafields configuration

## 📈 Performance Optimizations

### Implemented
- ✅ Code splitting (React vendor, Helmet)
- ✅ Terser minification
- ✅ Preconnect to external domains
- ✅ DNS prefetch for CDN
- ✅ Optimized build configuration

### Recommended
- [ ] Lazy load images with `loading="lazy"`
- [ ] Add width/height to all images
- [ ] Implement image optimization workflow
- [ ] Enable compression on server
- [ ] Use CDN for static assets

## 🧪 Testing

### SEO Testing Tools

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Test product schema markup

2. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Test Core Web Vitals

3. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly
   - Verify mobile responsiveness

4. **OpenGraph Preview**
   - https://www.opengraph.xyz/
   - Test social media sharing

### Local Testing

```bash
# Start dev server
npm run dev

# Visit in browser:
# - http://localhost:5173/
# - http://localhost:5173/robots.txt
# - http://localhost:5173/sitemap.xml
```

## 📚 Documentation

- [SEO Integration Guide](./SEO_INTEGRATION_GUIDE.md) - How to add SEO to pages
- [Shopify Integration](./shopify/README.md) - Shopify setup and deployment
- [Implementation Plan](./artifacts/implementation_plan.md) - Technical plan
- [Walkthrough](./artifacts/walkthrough.md) - Complete implementation walkthrough

## 🚀 Deployment

### Pre-deployment Checklist

- [ ] All pages wrapped with `PageWrapper`
- [ ] Unique titles and descriptions for each page
- [ ] Product schema added to product pages
- [ ] Images optimized to WebP
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Google Analytics ID added
- [ ] Build tested locally
- [ ] SEO tested with Google tools

### Build for Production

```bash
# Build
npm run build

# Generate sitemap
npm run generate-sitemap

# Preview build
npm run preview
```

### Server Configuration

For BrowserRouter to work, configure your server to:
1. Serve `index.html` for all routes
2. Handle 404s by serving `index.html`

**Nginx example**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Vercel/Netlify**: Automatic support for SPAs

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript for type safety
3. Add SEO metadata for new pages
4. Update sitemap generator for new routes
5. Test with SEO tools before committing

## 📄 License

Proprietary - Leger Lab S.r.l.

## 📞 Support

For questions or issues:
- Technical: Check documentation in `/docs`
- SEO: See `SEO_INTEGRATION_GUIDE.md`
- Shopify: See `shopify/README.md`

---

**Built with ❤️ for optimal SEO and performance**
