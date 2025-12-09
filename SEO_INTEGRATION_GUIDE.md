# SEO Integration Guide - LegerLAB

## Overview

This guide explains how to integrate the SEO components into your pages for optimal search engine optimization.

## Quick Start

### 1. Wrap Pages with PageWrapper

The `PageWrapper` component automatically handles SEO meta tags and structured data for each page.

```tsx
import PageWrapper from '../components/PageWrapper';

const HomePage = () => {
  return (
    <PageWrapper 
      includeOrganizationSchema={true}
      includeWebSiteSchema={true}
    >
      {/* Your page content */}
    </PageWrapper>
  );
};
```

### 2. Automatic Metadata Loading

The `PageWrapper` automatically loads metadata from `data/seo-metadata.json` based on the current route:

- **Homepage** (`/`) → Uses metadata from `pages["/"]`
- **Product pages** → Uses metadata from `products[handle]`
- **Other pages** → Uses metadata from `pages[path]`

### 3. Override Metadata (Optional)

You can override the automatic metadata:

```tsx
<PageWrapper 
  metaOverrides={{
    title: "Custom Title",
    description: "Custom description",
    image: "/custom-image.jpg"
  }}
>
  {/* Content */}
</PageWrapper>
```

## Component Integration Examples

### Homepage with Organization & WebSite Schema

```tsx
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const Home: React.FC = () => {
  return (
    <PageWrapper 
      includeOrganizationSchema={true}
      includeWebSiteSchema={true}
    >
      <div>
        {/* Your homepage content */}
      </div>
    </PageWrapper>
  );
};

export default Home;
```

### Product Page with Product Schema

```tsx
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { ProductSchema } from '../components/product/ProductSchema';
import products from '../data/products';

const OrderPage: React.FC = () => {
  const product = products[0]; // Get your product

  return (
    <PageWrapper>
      <ProductSchema product={product} />
      <div>
        {/* Your product page content */}
      </div>
    </PageWrapper>
  );
};

export default OrderPage;
```

### Page with Breadcrumbs

```tsx
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Breadcrumbs from '../components/product/Breadcrumbs';

const CollantPage: React.FC = () => {
  const breadcrumbItems = [
    { name: 'Prodotti', url: '/prodotti' },
    { name: 'Collant Drenante', url: '/collant' }
  ];

  return (
    <PageWrapper>
      <Breadcrumbs items={breadcrumbItems} className="container mx-auto py-4" />
      <div>
        {/* Your page content */}
      </div>
    </PageWrapper>
  );
};

export default CollantPage;
```

## SEO Metadata Configuration

### Adding New Pages

Edit `data/seo-metadata.json`:

```json
{
  "pages": {
    "/your-new-page": {
      "title": "Page Title | Leger Lab",
      "description": "Page description for SEO",
      "keywords": ["keyword1", "keyword2"],
      "og_image": "/assets/images/your-image.webp",
      "canonical": "/your-new-page"
    }
  }
}
```

### Adding New Products

```json
{
  "products": {
    "product-handle": {
      "title": "Product Name | Leger Lab",
      "description": "Product description for SEO",
      "keywords": ["product", "keywords"],
      "og_image": "/assets/images/products/product-hero.webp",
      "canonical": "/prodotti/product-handle"
    }
  }
}
```

## Structured Data (Schema.org)

### Available Schema Generators

Located in `utils/schema-generators.ts`:

1. **generateOrganizationSchema()** - Company information
2. **generateWebSiteSchema()** - Website search capability
3. **generateBreadcrumbSchema(items)** - Navigation breadcrumbs
4. **generateProductSchema(product)** - Product details (in ProductSchema component)

### Custom Structured Data

Pass custom schema to PageWrapper:

```tsx
const customSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  }
};

<PageWrapper structuredData={customSchema}>
  {/* Content */}
</PageWrapper>
```

## Performance Best Practices

### 1. Image Optimization

Use the image optimization script:

```bash
npm run optimize-images
```

Place source images in `assets/images/source/` and the script will generate:
- WebP format (85% quality)
- Multiple sizes (hero: 1200x1200, thumbnail: 400x400, og: 1200x630)
- JPG fallback

### 2. Lazy Loading Images

```tsx
<img 
  src="/assets/images/products/product-hero.webp"
  alt="Descriptive alt text"
  loading="lazy"
  width="1200"
  height="1200"
/>
```

### 3. Preload Critical Resources

Already configured in `index.html`:
- Google Fonts
- Font Awesome
- External CDNs

## Sitemap Generation

Generate sitemap before deployment:

```bash
npm run generate-sitemap
```

This creates `public/sitemap.xml` with all pages and products.

## Verification Checklist

Before deploying:

- [ ] All pages wrapped with `PageWrapper`
- [ ] Unique title and description for each page
- [ ] Product pages have `ProductSchema`
- [ ] Images have descriptive alt text
- [ ] Images have width and height attributes
- [ ] Sitemap generated (`npm run generate-sitemap`)
- [ ] robots.txt accessible at `/robots.txt`
- [ ] No console errors in browser
- [ ] Test with Google Rich Results Test
- [ ] Test with PageSpeed Insights

## Testing SEO

### 1. Local Testing

```bash
npm run dev
```

Visit:
- http://localhost:5173/ (homepage)
- http://localhost:5173/robots.txt
- http://localhost:5173/sitemap.xml

### 2. Structured Data Testing

Use Google's Rich Results Test:
https://search.google.com/test/rich-results

### 3. Meta Tags Testing

Use OpenGraph Preview:
https://www.opengraph.xyz/

### 4. Performance Testing

Use PageSpeed Insights:
https://pagespeed.web.dev/

## Common Issues

### Meta Tags Not Showing

**Problem**: Dynamic meta tags not appearing in page source.

**Solution**: Ensure `PageWrapper` is wrapping your page content and `HelmetProvider` is in `App.tsx`.

### Sitemap Not Updating

**Problem**: Sitemap doesn't include new pages.

**Solution**: Run `npm run generate-sitemap` after adding new routes.

### Images Not Optimized

**Problem**: Large image file sizes.

**Solution**: 
1. Place source images in `assets/images/source/`
2. Run `npm run optimize-images`
3. Use generated WebP images

## Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Core Web Vitals](https://web.dev/vitals/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)

## Support

For questions or issues:
1. Check this documentation
2. Review `implementation_plan.md`
3. Consult the LegerLAB development team
