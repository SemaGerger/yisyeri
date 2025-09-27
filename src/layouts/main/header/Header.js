  import React from "react";
  import siteConfig from "../../../config/siteConfig";
  import Navbar from "../../main/header/Navbar";

  const Header = () => {
    return (
      <header className="fixed top-0 left-0 w-full bg-white/100 shadow-md py-3 px-3 md:px-20 flex justify-between items-center z-50">
        {/* Logo */}
  <div className="relative w-[60px] h-[48px] select-none ">
  <a href="/" onContextMenu={(e) => e.preventDefault()}>
    <img 
      src={siteConfig.SITE_LOGO}
      alt="Logo"
      className="h-15 absolute top-0 left-0 z-10 select-none "
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
    />
    <img 
      src={siteConfig.SITE_YAZISI}
      alt="Logo Yazısı"
      className="h-15 absolute top-0 left-0 z-0 animate-wiggleOnce select-none pointer-events-none"
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
    />
  </a>
</div>





        {/* Navbar */}
        <Navbar />
      </header>
    );
  };

  export default Header;
