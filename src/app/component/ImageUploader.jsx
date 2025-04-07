'use client';
import React, { useRef, useEffect, useState } from 'react';

const ImageUploader = ({ onUpload }) => {
  const fileInputRef = useRef();
  const [previewImage, setPreviewImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Load from localStorage if present
  useEffect(() => {
    const storedImage = localStorage.getItem('uploadedImage');
    if (storedImage) {
      setPreviewImage(storedImage);
      onUpload(storedImage);
    }
  }, [onUpload]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      onUpload(imageURL);
      setPreviewImage(imageURL);
      setShowModal(true);

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        localStorage.setItem('uploadedImage', base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  const handleDelete = () => {
    localStorage.removeItem('uploadedImage');
    setPreviewImage(null);
    onUpload(null);
    setShowModal(false);
  };

  return (
    <div className="mb-6 flex flex-col gap-4 items-center py-4">
      <button
        onClick={triggerUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {previewImage ? 'Change Image' : 'Upload Image'}
      </button>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />

      {/* Preview + Modal */}
      {previewImage && (
        <>
          <div
            className="cursor-pointer text-blue-600 underline"
            onClick={() => setShowModal(true)}
          >
            Preview Uploaded Image
          </div>

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
              <div className="bg-white rounded-lg p-4 shadow-md w-[90%] max-w-md text-center relative">
                <img
                  src={previewImage}
                  alt="Uploaded Preview"
                  className="w-full h-auto rounded mb-4"
                />
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleDelete}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ImageUploader;
