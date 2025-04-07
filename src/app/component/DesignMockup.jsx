"use client";

import { useRef, useState, useEffect } from "react";

export default function DesignMockup() {
  const [image, setImage] = useState(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const mockupRef = useRef(null);
  const imgRef = useRef(null);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    const rect = imgRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const mockupRect = mockupRef.current.getBoundingClientRect();
    const imgWidth = imgRef.current.offsetWidth;
    const imgHeight = imgRef.current.offsetHeight;

    let newX = e.clientX - mockupRect.left - dragOffset.current.x;
    let newY = e.clientY - mockupRect.top - dragOffset.current.y;

    // Restrict movement inside the mockup
    newX = Math.max(0, Math.min(newX, mockupRect.width - imgWidth));
    newY = Math.max(0, Math.min(newY, mockupRect.height - imgHeight));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={mockupRef}
        className="relative w-[300px] h-[300px] border border-gray-300"
      >
        <img
          src="/images/VelvetSatin.png" // replace with your mockup
          alt="Mockup"
          className="w-full h-full object-contain"
        />
        {image && (
          <img
            ref={imgRef}
            src={image}
            alt="Uploaded"
            onMouseDown={handleMouseDown}
            className="absolute w-[100px] h-[100px] object-contain cursor-move"
            style={{
              top: `${position.y}px`,
              left: `${position.x}px`,
            }}
          />
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="border px-4 py-2 rounded-md"
      />
    </div>
  );
}
