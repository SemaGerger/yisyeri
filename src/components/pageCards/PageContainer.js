import React from "react";
import PageCard from "../pageCards/PageCard";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

const PageContainer = ({ partners }) => {



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {partners.map((partner, index) => {
        const cells = partner.Cells || [];
        const name = cells[2]?.DisplayText || "İsim yok";
        const yetkili = cells[3]?.DisplayText || "Yetkili yok";
        const faaliyet = cells[4]?.DisplayText || "Faaliyet türü yok";

        let image = siteConfig.LOGO;
        try {

          const filesJson = cells[16]?.Value || "[]";
          const files = JSON.parse(filesJson);
          if (Array.isArray(files) && files.length > 0) {
            image = files[0]?.src ?? siteConfig.LOGO;
          }
         // console.log("Cells içeriği:", partner.Cells);
        // console.log("🔍 Tüm hücreler:");
//cells.forEach((cell, index) => {
  //console.log(`Index: ${index}`, "ColumnName:", cell.ColumnName, "Value:", cell.Value);
//});


        } catch (err) {
          console.warn("Resim verisi okunamadı:", err);
        }

        // Partner ID’yi bul
        const objectCell = cells.find(c => c.ColumnName === siteConfig.API.OBJECT_ID);
        const objectId = objectCell?.Value ? String(objectCell.Value) : null;
      
        if (!partners) {
          
          return (
            <div className="flex justify-center items-center h-64 m-16">
              <p text-gray-500 text-lg>Yükleniyor...</p>
            </div>
          );
        }

        return (
          <Link
            key={objectId || `partner-${index}`}
            to={`/detay/${objectId}`}
            state={{ image }}
            className="block"
          >
            <PageCard
              id={objectId}
              name={name}
              image={image}
              extraInfo={`Yetkili: ${yetkili} | Tür: ${faaliyet}`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default PageContainer;
