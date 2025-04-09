'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

const CreateSpringHome = ({ rating, mainImage, features, buttonFunction }) => {
  const maxStars = 5;

  return (
    <div className="w-full">
      {/* Clickable Image */}
      <div onClick={buttonFunction} className="cursor-pointer relative w-full h-auto cursor-pointer">
        <Image
          src={mainImage}
          alt="Spring Home Banner"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Rating & Features */}
      <div className="bg-white px-6 py-4 flex flex-wrap items-center justify-center gap-6 shadow">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <Image
            src="/sitejabber.png" // Optional logo - add to /public or remove
            alt="Sitejabber"
            width={32}
            height={32}
          />
          <span className="font-bold text-lg text-black">{rating}</span>
          <div className="flex items-center text-pink-500">
            {[...Array(maxStars)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.round(rating) ? 'fill-pink-500' : 'text-gray-300'
                }`}
                fill={i < Math.round(rating) ? 'currentColor' : 'none'}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">Overall Satisfaction Rating</span>
        </div>
        <div className="border-t border-black-600 my-4"></div>

        {/* Features */}
        {features.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2 text-sm text-center">
            <div className="text-pink-500">{item.icon}</div>
            <div>
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="font-semibold text-gray-800">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateSpringHome;
