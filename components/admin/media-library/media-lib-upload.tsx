import { UploadCloud } from "lucide-react";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { Progress } from "@/components/ui/progress";

export default function MediaLibUpload({ setRefetch }: { setRefetch: any }) {
  const [preview, setPreview] = useState<string | null>(null);

  const [progress, setProgress] = useState<number>(0);

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(file);
    setPreview(fileURL);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-secret-key": `${process.env.NEXT_PUBLIC_IMAGE_SECRET_KEY}`,
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              // @ts-ignore
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );

      setProgress(100);
      setRefetch(new Date());
      setPreview(null);
      console.log("Upload success:", response.data);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center p-10 border-[2px] border-dashed">
        {!preview ? (
          <div>
            {" "}
            <label htmlFor="image">
              <div className="flex flex-col items-center">
                <UploadCloud />
                <h2 className="text-appBlack mt-2">
                  Click to upload or drag and drop
                </h2>
                <p className="text-appBlack text-sm">Maximum file size 5 MB</p>
              </div>
            </label>
            <input
              onChange={uploadImage}
              className="hidden"
              type="file"
              name=""
              id="image"
              multiple={false}
              accept="image/*"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center ">
            <div className="">
              <img className="max-h-20" src={preview} alt="" />
            </div>
            <p className="mt-4 tex-sm text-appBlack">Uploading: {progress}</p>
            <Progress value={progress} className="w-40 h-2 mt-2" />
          </div>
        )}
      </div>
    </div>
  );
}
