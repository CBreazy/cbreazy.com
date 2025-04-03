// src/components/Gallery.js
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '../../sanity/lib/client';

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div>
        {/* thumbnail gallery */}
      <div className="flex flex-wrap">
        {images.map((image) => (
          <div
            key={image._key}
            onClick={() => handleImageClick(image)}
            className="w-1/2 cursor-pointer px-2 py-2"
          >
            <div className="w-full h-[200px] relative shadow-lg rounded-lg overflow-hidden">
              <Image
                src={urlFor(image).url()}
                alt={image.alt}
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>

    {/* full-screen image viewer */}
    {selectedImage && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
    <button onClick={handleClose} className="absolute top-2 right-2 text-neutral-800 text-2xl z-10 rounded-full px-2 bg-white">
        &times;
      </button>
    <div className="relative">
      <div style={{maxHeight:'90vh', maxWidth: '90vw', position: 'relative'}} className="overflow-y-auto">
        <Image
          src={urlFor(selectedImage).url()}
          alt={selectedImage.alt}
          width={800} // Set explicit width
          height={600} // Set explicit height
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  </div>
)}
    </div>
  );
}