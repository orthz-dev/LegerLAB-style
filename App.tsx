import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import HowToUse from './pages/HowToUse';
import Retailers from './pages/Retailers';
import CollantPage from './pages/CollantPage';
import OrderPage from './pages/OrderPage';
import Legal from './pages/Legal';
import BlogDidYouKnow from './pages/BlogDidYouKnow';
import BlogMagazine from './pages/BlogMagazine';
import Faq from './pages/Faq';
import { RoutePath } from './types';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <h1 className="text-3xl text-brand-strong">{title} - Coming Soon</h1>
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />

            {/* Main Menu Pages */}
            <Route path={RoutePath.COLLANT} element={<CollantPage />} />
            <Route path={RoutePath.HOW_TO} element={<HowToUse />} />
            <Route path={RoutePath.RETAILERS} element={<Retailers />} />

            {/* Blog Sub-pages */}
            <Route path={RoutePath.BLOG_DID_YOU_KNOW} element={<BlogDidYouKnow />} />
            <Route path={RoutePath.BLOG_MAGAZINE} element={<BlogMagazine />} />

            {/* Order Flow */}
            <Route path={RoutePath.ORDER} element={<OrderPage />} />


            {/* Footer / Legal */}
            <Route path={RoutePath.ABOUT} element={<About />} />
            <Route path={RoutePath.FAQ} element={<Faq />} />
            <Route path={RoutePath.PRIVACY} element={<Legal title="Privacy Policy" />} />
            <Route path={RoutePath.SHIPPING} element={<Legal title="Spedizioni e Resi" />} />
            <Route path={RoutePath.THANK_YOU} element={<PlaceholderPage title="Grazie per il tuo ordine" />} />

            <Route path="*" element={<PlaceholderPage title="404 - Pagina non trovata" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;