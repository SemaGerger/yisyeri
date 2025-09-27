import React from "react";
import { usePartners } from "../../hooks/UsePartners";
import SectionTitle from "../../components/section/SectionTitle";
import StoryCardContainer from "../../components/section/StoryCardContainer";
import StatusMessage from "../../components/status/StatusMessage";
import siteConfig from "../../config/siteConfig";

const PartnersSection = () => {
  const { partners, loading, error } = usePartners(1, 10);
  const hasPartners = partners && partners.length > 0;
  const showContent = !loading && !error && hasPartners;

  return (
    <section>
      <SectionTitle
        title={siteConfig.PARTNERS.SECTION_TITLE}
        subtitle={siteConfig.PARTNERS.SITE_DESCRIPTION}
      />
      
      <StatusMessage
        loading={loading}
        error={error}
        data={hasPartners ? partners : null}
        emptyMessage="Firmalar bulunamadı..."
        
      />

      {showContent && <StoryCardContainer partners={partners} />}
    </section>
  );
};

export default PartnersSection;