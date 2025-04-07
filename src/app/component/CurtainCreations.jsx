'use client';

import React from 'react';
import Image from 'next/image';

function CurtainCreations({
  heading,
  subHeading,
  mainImageSrc,
  data,
  showMoreText = 'Show Me More',
  onShowMoreClick,
}) {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto border rounded-lg shadow-sm p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Main Image */}
        <div className="flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[300px] rounded overflow-hidden shadow">
            <Image
              src={mainImageSrc}
              alt="Curtain Display"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Text & Items */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-1">{heading}</h2>
          <p className="text-sm text-gray-600 mb-6">{subHeading}</p>

          {/* Curtain Types Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded overflow-hidden shadow">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-700 text-center">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          {showMoreText && (
            <button
              onClick={onShowMoreClick}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-md"
            >
              {showMoreText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CurtainCreations;
