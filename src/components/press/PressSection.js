import React, { useRef, useEffect, useState } from "react";
import SectionTitle from "../../components/section/SectionTitle";
import siteConfig from "../../config/siteConfig";
import PressCard from "./PressCard";
import ModalVideo from "./ModalVideo";

const PressSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedVideo(null);
  };

  // Card Groups
  const firstThree = siteConfig.PRESS_DATA.slice(0, 3);
  const nextFour = siteConfig.PRESS_DATA.slice(3, 7);

  return (
    <div
      className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-2 bg-gray-50"
      ref={sectionRef}
    >
      <SectionTitle
        title={siteConfig.PRESS_DATA_APP.TITLE}
        subtitle={siteConfig.PRESS_DATA_APP.SUBTITLE}
      />

      {/* Video container */}
      <div className="max-w-7xl w-full">
        {/* 3  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {firstThree.map((item) => (
            <PressCard
              key={item.id}
              name={item.title}
              video={item.video}
              onClick={() => handleCardClick(item.video)}
            />
          ))}
        </div>

        {/* 4  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {nextFour.map((item) => (
            <PressCard
              key={item.id}
              name={item.title}
              video={item.video}
              onClick={() => handleCardClick(item.video)}
            />
          ))}
        </div>
      </div>

      {modalOpen && selectedVideo && (
        <ModalVideo src={selectedVideo} onClose={handleClose} />
      )}
    </div>
  );
};

export default PressSection;
