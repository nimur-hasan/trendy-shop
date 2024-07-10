"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ImageCardProps {
  imageObj: any;
  size: "sm" | "md";
  onClick: any;
}

const ImageCard = ({ imageObj, size, onClick }: ImageCardProps) => {
  return (
    <Card
      onClick={() => onClick(imageObj)}
      style={{
        backgroundImage:
          "repeating-conic-gradient(rgb(246, 246, 249) 0%, rgb(246, 246, 249) 25%, transparent 0%, transparent 50%)",
        backgroundPosition: "50% center",
        backgroundSize: "20px 20px",
      }}
      className="flex flex-col rounded-none border border-appBorder shadow-none overflow-hidden"
    >
      <div
        className={cn(
          "relative flex-grow flex flex-col justify-center items-center h-56 w-full p-4",
          size === "sm" && "h-20 p-3"
        )}
      >
        <img
          className="max-w-full max-h-full"
          src={`http://172.86.107.21:3000/images/${imageObj.low}`}
          alt=""
        />
      </div>
      <div className="flex justify-between items-center bg-white px-4 py-2 border-t border-t-appBorder">
        <div className="flex flex-col">
          {size !== "sm" && (
            <p className={"text-xs text-appBlack"}>{imageObj.webp}</p>
          )}
          <p
            className={cn(
              "text-sm uppercase font-light text-appBlack",
              size === "sm" && "text-xs"
            )}
          >
            {size !== "sm" && "WEBP - "} {imageObj?.webpWidth}*
            {imageObj?.webpHeight} ({(imageObj?.webpSize / 1024).toFixed(0)} kb)
          </p>
        </div>
        {size !== "sm" && (
          <div className="text-sm bg-appBorder px-2 py-1 rounded-md">IMAGE</div>
        )}
      </div>
    </Card>
  );
};

export default function MediaLibContent({
  size,
  refetch,
  onClick,
}: {
  size: "sm" | "md";
  refetch: string;
  onClick: any;
}) {
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
        setImages(result.reverse());
      });
  };

  useEffect(() => {
    getImages();
  }, [refetch]);
  return (
    <div className="mt-4">
      <p className="text-sm">Assets (0)</p>
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 mt-3 gap-4">
        {images.map((image, index) => (
          <ImageCard
            size={size}
            key={index}
            imageObj={image}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}
