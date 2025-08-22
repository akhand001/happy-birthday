import React from "react";

export default function MemoriesGallery({ images }) {
  return (
    <div className="p-6 bg-white">
     
      {/* Image Grid */}
      <div className="grid grid-cols- sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="flex items-center justify-center bg-white-100 rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={img.src}
              alt={`Memory ${i + 1}`}
              className="max-h-48 w-full object-cover transition-transform duration-200 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
