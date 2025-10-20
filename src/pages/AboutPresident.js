import React from "react";
import siteConfig from "../config/siteConfig";
import Layout from "../layouts/Layout";

const AboutPresident = () => {
  return (
    <Layout>
    <div className="flex flex-col items-center bg-gray-100 py-16 mt-16 px-6">
      {siteConfig.ABOUT_PRESIDENT.map((item) => (
        <div
          key={item.id}
          className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full"        >
         

          {/* Text */}
          <div className="flex flex-col justify-center  bg-gray-100 p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 ">
              {item.TITLE}
            </h2>
            <p className="text-lg text-gray-600">{item.TEXT}</p>
          </div>
           {/* Image */}
          <div className="relative">
            <img
              src={item.IMAGE}
              alt={item.TEXT}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0" />
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default AboutPresident;
