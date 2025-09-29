import React, { useRef, useEffect } from "react";

const MiniPreviewVideo = ({ src, previewTime = 5000 }) => {
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  const safePlay = (videoEl) => {
    if (videoEl && typeof videoEl.play === "function") {
      videoEl.play().catch(() => {});
    }
  };

  const safePause = (videoEl) => {
    if (videoEl && typeof videoEl.pause === "function") {
      videoEl.pause();
    }
  };

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

export default MiniPreviewVideo;
