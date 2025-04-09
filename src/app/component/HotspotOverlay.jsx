import React, { useState } from 'react';
import Image from 'next/image';

const HotspotOverlay = ({ mainImage, hotspots }) => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <div className="relative w-full h-auto">
      <Image src={mainImage} alt="Decor" width={1600} height={800} className="w-full h-auto object-cover" />
      {hotspots?.map((hotspot, index) => (
        <div
          key={index}
          className="absolute z-10"
          style={{ top: hotspot.y, left: hotspot.x }}
        >
          <button
            className="cursor-pointer bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
          >
            +
          </button>

          {activeHotspot === index && (
            <div className="absolute left-10 top-0 bg-white p-4 rounded-lg shadow-lg w-64">
              <h4 className="text-md font-semibold text-gray-800">{hotspot.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{hotspot.subtitle}</p>
              <p className="font-bold text-lg mb-2">${hotspot.price}</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md text-sm">{hotspot.action}</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HotspotOverlay;
