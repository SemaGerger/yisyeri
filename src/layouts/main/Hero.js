import React from "react";
import CTAButton from "../../components/button/CTAButton";
import siteConfig from "../../config/siteConfig";

const Hero = () => {


  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={siteConfig.HERO_VİDEO}
        autoPlay
        muted
        loop
      />

      <div className="absolute top-0 left-0 w-full h-full z-9 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"> </div>

      {/* Video middle */}
      <div className="relative z-10 text-center px-4 md:px-0 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          {siteConfig.SITE_NAME} <span className="text-yellow-400">{siteConfig.HERO_HIGHLIGHT}</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
          {siteConfig.SITE_DESCRIPTION_2}
        </p>

        {/* CTA Button - Hero'da normal buton */}
        <div className="flex justify-center mt-10">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;