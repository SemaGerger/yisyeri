
import { useLocation } from "react-router-dom";
import Header from "../layouts/main/header/Header";
import Footer from "../layouts/main/Footer";
import CTAButton1 from "../components/button/CTAButton1";
import CTAButton2 from "../components/button/CTAButton2";
import siteConfig from "../config/siteConfig";

const Layout = ({ children }) => {

  const location = useLocation();

  // Anasayfa mı
  const isHomePage = location.pathname === "/";
  // Anasayfa DEĞİLSE
  const showCTA = !isHomePage;

  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      
      {/* Fixed CTA button */}
      {showCTA && (
        <div className="fixed bottom-6 left-4 right-4 flex justify-between z-50 md:left-6 md:right-6">
          <CTAButton2 isFixed={true} href={siteConfig.CTA2URL} >  {siteConfig.CTATEXT}
          </CTAButton2>
          <CTAButton1 isFixed={true} href={siteConfig.CTAURL} >   {siteConfig.CTATEXT}
          </CTAButton1>
         
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Layout;