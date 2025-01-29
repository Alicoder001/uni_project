"use client";

import { useState, useEffect } from "react";

const Preloader = ({
  setVideoEnded,
}: {
  setVideoEnded: (state: boolean) => void;
}) => {
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#000000",
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
  );
};

export default Preloader;
