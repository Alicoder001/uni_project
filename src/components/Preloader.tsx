"use client";

import { useState, useEffect } from "react";

const Preloader = ({ loading }: { loading: boolean }) => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const shouldShowPreloader = loading || !videoEnded;

  return shouldShowPreloader ? (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgb(12, 21, 48)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        onEnded={handleVideoEnd}
      >
        <source src="/assets/video/loader.mp4" type="video/mp4" />
        Loading...
      </video>
    </div>
  ) : null;
};

export default Preloader;
