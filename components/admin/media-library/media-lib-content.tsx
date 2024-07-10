"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ImageCardProps {
  imageObj: any;
}

const ImageCard = ({ imageObj }: ImageCardProps) => {
  return (
    <Card
      style={{
        backgroundImage:
          "repeating-conic-gradient(rgb(246, 246, 249) 0%, rgb(246, 246, 249) 25%, transparent 0%, transparent 50%)",
        backgroundPosition: "50% center",
        backgroundSize: "20px 20px",
      }}
      className="flex flex-col rounded-none border border-appBorder shadow-none overflow-hidden"
    >
      <div className="relative flex-grow flex flex-col justify-center items-center h-56 w-full p-4">
        <img
          className="w-full"
          src={`http://172.86.107.21:3000/images/${imageObj.low}`}
          alt=""
        />
      </div>
      <div className="flex justify-between items-center bg-white px-4 py-2 border-t border-t-appBorder">
        <div className="flex flex-col">
          <p className="text-xs text-appBlack">{imageObj.webp}</p>
          <p className="text-sm uppercase font-light text-appBlack">
            WEBP - {imageObj?.webpWidth}*{imageObj?.webpHeight} (
            {(imageObj?.webpSize / 1024).toFixed(0)} kb)
          </p>
        </div>
        <div className="text-sm bg-appBorder px-2 py-1 rounded-md">IMAGE</div>
      </div>
    </Card>
  );
};

export default function MediaLibContent() {
  const [images, setImages] = useState([]);
  const getImages = () => {
    fetch(`${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}/get-all`, {
      headers: {
        "Content-Type": "application/json",
        "x-secret-key": `${process.env.NEXT_PUBLIC_IMAGE_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log({ result });
        setImages(result);
      });
  };

  useEffect(() => {
    getImages();
  }, []);
  return (
    <div className="mt-4">
      <p className="text-sm">Assets (0)</p>
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 mt-3 gap-4">
        {images.map((image, index) => (
          <ImageCard key={index} imageObj={image} />
        ))}
      </div>
    </div>
  );
}
