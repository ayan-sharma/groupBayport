
'use client';

import Image from 'next/image';

const PersonalizationPicks = ({ heading, items }) => {
  return (
    <div className="py-10 text-center">
      <h2 className="text-2xl font-semibold mb-6 text-black">{heading}</h2>
      <div className="flex flex-wrap  justify-between gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                className="rounded-full object-contain"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizationPicks;