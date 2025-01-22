"use client";

import { useState } from "react";

const Preloader = () => {
  return (
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
      >
        <source src="/assets/video/loader.mp4" type="video/mp4" />
        Loading...
      </video>
    </div>
  );
};

export default Preloader;
