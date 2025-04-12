'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Immediate Imports (above the fold)
import Navbar from "./component/Navbar";
import ImageUploader from "./component/ImageUploader";
import CreateSpringHome from "./component/SlideShow";

import mainHomeImage from "../../public/images/mainHomeImage.png";
import mainImage from "../../public/images/mainImage.jpg";

import {
  categories,
  features,
  personalized_section,
  secondBlock,
  hotspots,
  picks,
  trendingData,
  curtainData,
  timelessTapestries,
} from "../../public/constantProduct";

// Dynamically import heavier, below-the-fold components
const TrendingProducts = dynamic(() => import("./component/TrendingProducts"), {
  loading: () => <div style={{ height: "300px" }}>Loading products...</div>,
  ssr: false,
});
const HotspotOverlay = dynamic(() => import("./component/HotspotOverlay"), {
  ssr: false,
});
const PersonalizationPicks = dynamic(() => import("./component/PersonalizationPicks"), {
  ssr: false,
});
const PromoVideoBanner = dynamic(() => import("./component/PromoVideoBanner"), {
  ssr: false,
});
const CurtainCreations = dynamic(() => import("./component/CurtainCreations"), {
  ssr: false,
});

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setUploadedImage(storedImage);
    }
  }, []);

  return (
    <div>
      <Navbar categories={categories} />

      {/* Above the fold section */}
      <CreateSpringHome
        rating={4.5}
        mainImage={mainHomeImage}
        features={features}
        buttonFunction={() => console.log("Show more clicked!")}
      />

      <ImageUploader onUpload={(url) => setUploadedImage(url)} />

      {/* Below the fold - deferred UI rendering */}
      <div style={{ width: "80%", margin: "auto" }}>
        <TrendingProducts
          heading="Personalized Living Starts Here"
          data={personalized_section}
          uploadedImage={uploadedImage}
          showMoreText={"Start Creating"}
        />
        <TrendingProducts
          heading="We Curate, You Create - Explore 60K+ Designs"
          data={secondBlock}
          showMoreText={"Explore More Designs"}
        />
      </div>

      <HotspotOverlay
        mainImage="/images/personalized_web_banner.png.webp"
        hotspots={hotspots}
      />

      <div style={{ width: "80%", margin: "auto" }}>
        <PersonalizationPicks heading="Top Personalization Picks" items={picks} />

        <PromoVideoBanner
          videoUrl="https://ds5e5and3r3r0.cloudfront.net/neonearth_stg/images/contentimages/images/NE-Homepage-Intro-Video.mp4"
          title="Create a Picture-Perfect Home"
          subtitle="With Exclusive Savings"
          offerText="15% OFF Sitewide"
          buttonText="Claim Offer"
          promoCode="best20"
          onButtonClick={() => alert("offer claimed")}
          thumbnailUrl="/images/video_thumbnail.PNG"
        />

        <TrendingProducts
          heading="Trending Custom Home Decor"
          data={trendingData}
          uploadedImage={uploadedImage}
          showMoreText={"Create a New Trend"}
        />

        <CurtainCreations
          heading="Curtain Creations"
          subHeading="Personalized Drapes to Set the Ambience"
          mainImageSrc={mainImage}
          data={curtainData}
          showMoreText="Show Me More"
          onShowMoreClick={() => console.log("Show more clicked!")}
        />

        <CurtainCreations
          heading="Timeless Tapestries"
          subHeading="Personalized Tapestries to Reflect Your Essence"
          mainImageSrc="/images/lastBlock/tapestry_main_image_1718182546756.jpg.webp"
          data={timelessTapestries}
          showMoreText="Show Me More"
          onShowMoreClick={() => console.log("Show more clicked!")}
        />
      </div>
    </div>
  );
}
