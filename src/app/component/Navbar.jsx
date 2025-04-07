'use client';

import React, { useState } from 'react';
import { ChevronDown, Heart, ShoppingBag, Truck, UserRound } from 'lucide-react';
import Image from 'next/image';

const Navbar = ({categories}) => {
    const [activeCategory, setActiveCategory] = useState(null);
  
    return (
      <nav className="bg-white shadow relative z-50">
        <div className="border-b bg-[#fff3de] text-sm text-gray-800 py-1 px-4 flex items-center justify-center space-x-4" style={{padding:"10px"}}>
          <span className="flex items-center space-x-1">
            <span className="inline-block"><Truck color='black'/></span>
            <span>Free Shipping Above $60</span>
          </span>
          <span className="border-l h-4 border-gray-300"></span>
          <span className="flex items-center space-x-1">
            <span className="inline-block">🕐</span>
            <span>Up to 20% OFF Sitewide. Use Code: REFRESH</span>
          </span>
        </div>
                <div style={{width:"80%", justifySelf:"center"}}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <Image src="/retailer_site_logo848.png.webp" alt="logo" width={120} height={40} />
          </div>
          <div className="flex-1 px-10">
            <div className="flex w-full border rounded-md overflow-hidden" style={{border:".313rem solid #f1f1f1"}}>
              <input
                type="text"
                placeholder="Find What Brings You Joy"
                className="flex-1 px-4 py-2 outline-none text-black"
              />
              <button className="bg-pink-500 px-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Heart alt="wishlist" width={20} height={20} color='black'/>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-1">0</span>
            </div>
            <div className="relative">
            <ShoppingBag color='black' alt="cart" width={20} height={20} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-1">0</span>
            </div>
            <div className="flex items-center space-x-1">
            <UserRound color='black' alt="user" width={20} height={20} />
              <span className="text-sm text-gray-700">Join/Login</span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <ul className="flex space-x-10 py-4 items-center">
            {categories.map((category, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="flex flex-col items-center space-y-2 cursor-pointer">
                <Image src={category.icon} alt="" width={30} height={30} />
                  <div className="flex items-center">
                  <span className="font-medium text-gray-700">{category.name}</span>
                  <ChevronDown size={16} color='black'/>
                  </div>
                </div>
                {activeCategory === index && (
                  <div className="absolute left-0 top-full mt-2 bg-white border shadow-lg p-6 min-w-[600px] grid grid-cols-3 gap-6">
                    {category.submenu.map((section, i) => (
                      <React.Fragment key={i}>
                        <div className="col-span-1">
                          <h4 className="text-sm font-semibold text-pink-500 mb-2">{section.title}</h4>
                          <ul className="space-y-2">
                            {section.items.map((item, j) => (
                              <li
                                key={j}
                                className="text-gray-700 hover:text-pink-500 cursor-pointer text-sm"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {section.banner && (
                          <div className="col-span-2 flex items-center border-l pl-4">
                            <div>
                              <p className="text-sm font-medium text-gray-800 mb-2">
                                {section.banner.text}
                              </p>
                              <Image
                                src={section.banner.image}
                                alt="Banner"
                                width={200}
                                height={200}
                                className="rounded-md"
                              />
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;