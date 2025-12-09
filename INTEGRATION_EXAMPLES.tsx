// EXAMPLE: How to integrate SEO into Home.tsx
// This is a reference example - copy this pattern to your actual pages

import React from 'react';
import PageWrapper from '../components/PageWrapper';
// ... your other imports

const Home: React.FC = () => {
    return (
        <PageWrapper
            includeOrganizationSchema={true}
            includeWebSiteSchema={true}
        >
            {/* 
        Your existing Home page content goes here.
        The PageWrapper will automatically:
        1. Load metadata from data/seo-metadata.json for route "/"
        2. Add Organization schema (company info)
        3. Add WebSite schema (search capability)
        4. Set meta tags for title, description, Open Graph, Twitter Cards
      */}

            {/* Example existing content */}
            <div className="hero-section">
                <h1>LISCIA SNELLA LEGGERA</h1>
                <p>Il Collant Drenante Anticellulite</p>
                {/* ... rest of your content */}
            </div>
        </PageWrapper>
    );
};

export default Home;

// ============================================================
// EXAMPLE: How to integrate SEO into OrderPage.tsx (Product Page)
// ============================================================

/*
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { ProductSchema } from '../components/product/ProductSchema';
import products from '../data/products';

const OrderPage: React.FC = () => {
  // Get the product you want to display
  const featuredProduct = products[0]; // Kit 6 trattamenti

  return (
    <PageWrapper>
      <ProductSchema product={featuredProduct} />
      
      {/* Your existing OrderPage content */}
<div className="product-page">
    <h1>{featuredProduct.title}</h1>
    <p>{featuredProduct.description}</p>
    <p className="price">€{featuredProduct.price}</p>
    {/* ... rest of your content */}
</div>
    </PageWrapper >
  );
};

export default OrderPage;
*/

// ============================================================
// EXAMPLE: How to integrate SEO into CollantPage.tsx (with Breadcrumbs)
// ============================================================

/*
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
      
      {/* Your existing CollantPage content */}
<div className="collant-page">
    <h1>Il Collant Drenante Anticellulite</h1>
    {/* ... rest of your content */}
</div>
    </PageWrapper >
  );
};

export default CollantPage;
*/

// ============================================================
// EXAMPLE: How to override metadata for a specific page
// ============================================================

/*
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const SpecialPage: React.FC = () => {
  return (
    <PageWrapper 
      metaOverrides={{
        title: "Special Promotion - Limited Time Offer",
        description: "Get 50% off on all products this week only!",
        image: "/assets/images/special-promo.webp",
        noindex: false // Set to true if you don't want this page indexed
      }}
    >
      {/* Your page content */}
    </PageWrapper >
  );
};

export default SpecialPage;
*/

// ============================================================
// QUICK REFERENCE: PageWrapper Props
// ============================================================

/*
interface PageWrapperProps {
  children: React.ReactNode;                    // Your page content
  metaOverrides?: {                             // Optional: override auto-loaded metadata
    title?: string;                             // Page title
    description?: string;                       // Meta description
    keywords?: string[];                        // Keywords array
    image?: string;                             // Open Graph image path
    url?: string;                               // Canonical URL
    type?: 'website' | 'article' | 'product';  // Open Graph type
    noindex?: boolean;                          // Prevent indexing
    canonical?: string;                         // Canonical URL path
  };
  structuredData?: object | object[];           // Optional: custom schema markup
  includeOrganizationSchema?: boolean;          // Include Organization schema
  includeWebSiteSchema?: boolean;               // Include WebSite schema
}
*/

// ============================================================
// STEP-BY-STEP INTEGRATION GUIDE
// ============================================================

/*
1. Import PageWrapper at the top of your page component:
   import PageWrapper from '../components/PageWrapper';

2. Wrap your existing JSX with <PageWrapper>:
   return (
     <PageWrapper>
       {/* your existing content */}
     </PageWrapper >
   );

3.(Optional) Add schemas for homepage:
    <PageWrapper
        includeOrganizationSchema={true}
        includeWebSiteSchema={true}
    >

        4. (Optional) Add ProductSchema for product pages:
        import {ProductSchema} from '../components/product/ProductSchema';
        <PageWrapper>
            <ProductSchema product={yourProduct} />
            {/* content */}
        </PageWrapper>

        5. (Optional) Add Breadcrumbs for navigation:
        import Breadcrumbs from '../components/product/Breadcrumbs';
        <PageWrapper>
            <Breadcrumbs items={[...]} />
            {/* content */}
        </PageWrapper>

        6. Test in browser:
        - Open DevTools
        - Inspect <head> section
            - Verify meta tags are present
            - Check for JSON-LD scripts

            7. Validate with Google Rich Results Test:
            https://search.google.com/test/rich-results
            */
