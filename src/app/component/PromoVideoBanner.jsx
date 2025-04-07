'use client';

const PromoVideoBanner = ({thumbnailUrl, videoUrl, title, subtitle, promoCode, buttonText, buttonFunction }) => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-10">
        {/* Video */}
        <div className="w-full lg:w-1/2">
          <video controls className="w-full rounded shadow"
          poster={thumbnailUrl}>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
  
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left text-black">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-lg text-gray-700 mb-4">{subtitle}</p>
          <p className="text-3xl font-bold text-pink-600 mb-1">15% OFF Sitewide</p>
          <p className="text-sm text-gray-500 mb-4">+ $15 Worth Wallet Points For Next Purchase</p>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <span className="bg-gray-100 text-pink-600 px-3 py-1 rounded border border-pink-300 font-semibold">
              Code: {promoCode}
            </span>
            <button
              onClick={buttonFunction}
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded font-semibold"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PromoVideoBanner;