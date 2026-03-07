"use client";
import React, { useState, useEffect } from "react";
import { PixelatedCanvas } from "./ui/pixelated-canvas";

const W = 900;
const H = 280;

export default function PixelatedBrandText() {
  const [textSrc, setTextSrc] = useState<string | null>(null);

  useEffect(() => {
    const generate = async () => {
      await document.fonts.ready;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const canvas = document.createElement("canvas");
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, W, H);
      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";

      // "WISDOM" — Orbitron bold, hot magenta with glow
      ctx.shadowColor = "#C5A55A";
      ctx.shadowBlur = 15;
      ctx.font = "900 100px Orbitron";
      ctx.fillStyle = "#C5A55A";
      ctx.fillText("WISDOM", W / 2, 110);

      // "Nexus" — Orbitron bold, lighter gold with glow
      ctx.shadowColor = "#E8D5A0";
      ctx.shadowBlur = 12;
      ctx.font = "700 125px Orbitron";
      ctx.fillStyle = "#E8D5A0";
      ctx.fillText("Nexus", W / 2, 250);

      ctx.shadowBlur = 0;

      setTextSrc(canvas.toDataURL("image/png"));
    };
    generate();
  }, []);

  if (!textSrc) {
    return (
      <div className="w-full max-w-[900px] aspect-[45/14] animate-pulse bg-[#121212]/50 rounded-none" />
    );
  }

  return (
    <div className="w-full max-w-[900px] aspect-[45/14]">
      <PixelatedCanvas
        src={textSrc}
        width={W}
        height={H}
        cellSize={3}
        dotScale={0.9}
        shape="square"
        backgroundColor="#000000"
        interactive={true}
        distortionStrength={4}
        distortionRadius={90}
        distortionMode="swirl"
        dropoutStrength={0.25}
        tintColor="#C5A55A"
        tintStrength={0.05}
        objectFit="contain"
        jitterStrength={3}
        jitterSpeed={3}
        fadeOnLeave={true}
        entranceAnimation={true}
        entranceDuration={2200}
        className="!w-full !h-full"
      />
    </div>
  );
}
