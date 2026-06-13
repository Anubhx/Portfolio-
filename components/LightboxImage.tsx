"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  caption?: string;
}

export default function LightboxImage({ src, alt, priority, className, caption }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeLightbox();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeLightbox]);

  return (
    <>
      <figure className={`lightbox-figure ${className || ""}`}>
        <div 
          className="lightbox-trigger" 
          onClick={openLightbox}
          role="button"
          tabIndex={0}
          aria-label={`View larger image: ${alt}`}
          onKeyDown={(e) => e.key === "Enter" && openLightbox()}
        >
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto" }}
            className="editorial-image"
            priority={priority}
          />
        </div>
        {caption && <figcaption className="editorial-caption">{caption}</figcaption>}
      </figure>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="lightbox-modal"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
              quality={100}
            />
            <button 
              className="lightbox-close" 
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
