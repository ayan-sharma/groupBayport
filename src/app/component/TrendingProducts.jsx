'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const TrendingProducts = ({ heading, data, uploadedImage, showMoreText }) => {
  const [autoFitMap, setAutoFitMap] = useState({});

  const toggleAutoFit = (index) => {
    setAutoFitMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{heading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 auto-rows-fr">
          {data?.map((product, index) => {
            const isAutoFit = autoFitMap[index] ?? true;
            const baseImage = uploadedImage ? product?.mockupSrc : product?.imageSrc;
            const printArea = product?.printArea; // New: directly read from product

            return (
              <div key={index} className="flex flex-col bg-white overflow-hidden relative group h-full">
                {/* Auto Fit Toggle */}
                {uploadedImage && (
                  <div className="absolute top-2 left-2 z-10 bg-white p-1 rounded shadow flex items-center text-sm">
                    <span className="mr-1 text-black">Auto fit</span>
                    <input
                      type="checkbox"
                      checked={isAutoFit}
                      onChange={() => toggleAutoFit(index)}
                    />
                  </div>
                )}

                {/* Image Container */}
                <div className="relative w-full aspect-square flex-shrink-0">
                  <Image
                    src={baseImage}
                    alt={product?.title}
                    width={500}
                    height={500}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />

                  {uploadedImage && product?.mockupSrc && (
                    <div
                      className="absolute z-10 pointer-events-none"
                      style={
                        printArea
                          ? {
                              top: printArea.top,
                              left: printArea.left,
                              width: printArea.width,
                              height: printArea.height,
                              position: 'absolute',
                              overflow: 'hidden',
                            }
                          : {
                              inset: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }
                      }
                    >
                      <Image
                        src={uploadedImage}
                        alt="uploaded overlay"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: isAutoFit ? '100%' : 'auto',
                          height: '100%',
                          objectFit: isAutoFit ? 'contain' : 'none',
                          objectPosition: 'center',
                          mixBlendMode: 'normal',
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <h3 className="text-center text-sm text-gray-700 font-medium mb-2 truncate">
                    {product?.title}
                  </h3>
                  <p className="text-center text-gray-900 font-bold text-base">
                    {product?.price && <span className="bg-gray-200 p-1">{product?.price}</span>}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {showMoreText && (
          <div className="flex justify-center mt-6">
            <button className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-md">
              {showMoreText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingProducts;
