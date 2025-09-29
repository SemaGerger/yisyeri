import React from "react";
import MiniPreviewVideo from "./MiniPreviewVideo";

const PressCard = ({ name, image, video, onClick, className = "" }) => {
  const isValidSrc = video && video.trim() !== "";

  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:-translate-y-1 duration-300 flex flex-col h-full ${className}`}
      onClick={onClick}
    >
      {/* Video varsa */}
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
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      ) : (
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
    </div>
  );
};

export default PressCard;
