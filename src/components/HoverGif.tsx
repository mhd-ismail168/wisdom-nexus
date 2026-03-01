/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";

export function HoverGif({ src, alt, hovered, active, className }: { src: string, alt: string, hovered?: boolean, active?: boolean, className?: string }) {
    const [canvasSrc, setCanvasSrc] = useState<string | null>(null);
    const [shouldPlay, setShouldPlay] = useState(hovered || active);

    useEffect(() => {
        const hasHover = window.matchMedia('(hover: hover)').matches;
        if (!hasHover) {
            setShouldPlay(true);
            return;
        }

        let isMounted = true;
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(img, 0, 0, img.width, img.height);
                if (isMounted) {
                    setCanvasSrc(canvas.toDataURL());
                }
            }
        };
        return () => { isMounted = false; };
    }, [src]);

    useEffect(() => {
        const hasHover = window.matchMedia('(hover: hover)').matches;
        if (hasHover || active) {
            setShouldPlay(hovered || active);
        }
    }, [hovered, active]);

    return (
        <div className={`relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white ${className || ""}`}>
            {!shouldPlay && canvasSrc ? (
                <img src={canvasSrc} alt={alt} className="w-[110%] h-[110%] object-cover rounded-full" />
            ) : (
                <img src={src} key={shouldPlay ? "hovered" : "unhovered"} alt={alt} className="w-[110%] h-[110%] object-cover rounded-full" />
            )}
        </div>
    );
}
