'use client';

import Image from "next/image";
import TrendingProducts from "./component/TrendingProducts";
import {
  categories,
  curtainData,
  features,
  hotspots,
  personalized_section,
  picks,
  secondBlock,
  timelessTapestries,
  trendingData,
} from "../../public/constantProduct";
import CurtainCreations from "./component/CurtainCreations";
import mainImage from "../../public/images/mainImage.jpg";
import mainHomeImage from "../../public/images/mainHomeImage.png";
import CreateSpringHome from "./component/SlideShow";
import PersonalizationPicks from "./component/PersonalizationPicks";
import PromoVideoBanner from "./component/PromoVideoBanner";
import ImageUploader from "./component/ImageUploader";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import HotspotOverlay from "./component/HotspotOverlay";

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

      <CreateSpringHome
        rating={4.5}
        mainImage={mainHomeImage}
        features={features}
        buttonFunction={() => console.log("Show more clicked!")}
      />

      <ImageUploader onUpload={(url) => setUploadedImage(url)} />

      <div style={{ width: "80%", justifySelf: "center" }}>
        <TrendingProducts
          heading="Personalized Living Starts Here"
          data={personalized_section}
          uploadedImage={uploadedImage}
        />
        <TrendingProducts
          heading="We Curate, You Create - Explore 60K+ Designs"
          data={secondBlock}
        />
      </div>

      <HotspotOverlay
        mainImage="/images/personalized_web_banner.png.webp"
        hotspots={hotspots}
      />

      <div style={{ width: "80%", justifySelf: "center" }}>
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
