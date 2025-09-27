import React, { useRef, useEffect, useState } from "react";
import { pressData } from "../../api/DefaultData";
import SectionTitle from "../../components/section/SectionTitle";
import siteConfig from "../../config/siteConfig";

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

  const safePlay = (videoEl) => {
    if (videoEl && typeof videoEl.play === "function") {
      videoEl.play().catch((error) => {
       
      });
    }
  };

  const safePause = (videoEl) => {
    if (videoEl && typeof videoEl.pause === "function") {
      videoEl.pause();
    }
  };


  const MiniPreviewVideo = ({ src, previewTime = 5000 }) => {
    const videoRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
      const el = videoRef.current;
      if (!el) return;

      safePlay(el);

      intervalRef.current = setInterval(() => {
        if (!el.paused) {
          el.currentTime = 0;
        }
      }, previewTime);

      return () => {
        clearInterval(intervalRef.current);
        safePause(el);
      };
    }, [src, previewTime]);

    return (
      <video
        ref={videoRef}
        src={src}
        className="absolute w-full h-full object-cover top-0 left-0 rounded-lg pointer-events-none"
        muted
        autoPlay
        playsInline
        loop={false}
      />
    );
  };


  const ModalVideo = ({ src, onClose }) => {
    const videoRef = useRef(null);

    useEffect(() => {
      const videoEl = videoRef.current;
      safePlay(videoEl);

      // ESC ile kapatma
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        safePause(videoEl);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [src, onClose]);

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="relative bg-black p-4 rounded-lg max-w-3xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Kapatma butonu */}
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-400 transition"
          >
            ×
          </button>

          {/* Video */}
          <video
            ref={videoRef}
            src={src}
            controls
            autoPlay
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
    );
  };


 const PressCard = ({ name, image, video, onClick, className = "" }) => {
  const isValidSrc = video && video.trim() !== "";

  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:-translate-y-1 duration-300 flex flex-col h-full ${className}`}
      onClick={onClick}
    >
      {/* Video varsa ve geçerli bir src varsa */}
      {isValidSrc ? (
        <div className="relative">
          <video
            src={video}
            className="w-full h-48 object-cover"
            muted
            playsInline
          />
          <MiniPreviewVideo src={video} previewTime={5000} />
        </div>
      ) : image ? (
        // Eğer geçerli video yoksa ama görsel varsa
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      ) : (
        // Ne video ne görsel varsa, placeholder göster
        <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-gray-500">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      {/* İsteğe bağlı içerik */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>
    </div>
  );
};

  // Card Groups
  const firstThree = siteConfig.PRESS_DATA.slice(0, 3);
  const nextFour = siteConfig.PRESS_DATA.slice(3, 7);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-2 bg-gray-50" ref={sectionRef}>
      <SectionTitle
  title= {siteConfig.PRESS_DATA_APP.TITLE}
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
              extraInfo={item.extraInfo}
              image={null}
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
              extraInfo={item.extraInfo}
              image={null}
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