import React from "react";
import PartnersSection from '../main/PartnersSection';
import PressSection from "../main/PressSection";
import siteConfig from "../../config/siteConfig";


const Main = () => {
  return (
    <main className="py-20 px-6 md:px-20 bg-white-50 ">
      {/* Destek verenler */}
      <section className="mb-20">
        <PartnersSection />
      </section>


      {/*   Büyükçekmece Belediyesi Ruhsat ve Denetim Müdürlüğü text */}
      <section className="mb-28">

        <div className="container mx-auto relative text-center">
          <h1 className="select-none text-5xl lg:text-8xl font- text-emerald-200 absolute inset-0 flex items-center justify-center opacity-40">
            {siteConfig.SITE_DESCRIPTION_2}
          </h1>
          <h1 className=" text-2xl lg:text-5xl font-bold text-emerald-900 relative z-10">
            {siteConfig.SITE_DESCRIPTION_2}
          </h1>
        </div>

      </section>


      {/* Haberler*/}
      <section className=" lg:pt-8">
        <PressSection />
      </section>


    </main>
  );
};

export default Main;
