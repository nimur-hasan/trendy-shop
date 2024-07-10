"use client";
import { MediaLibModal } from "@/components/admin/media-library/media-lib-modal";
import SectionHeader from "@/components/admin/section-header";
import SectionWrapper from "@/components/admin/section-wreapper";
import RequiredBadge from "@/components/required-badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { NewProductSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { SelectValue } from "@radix-ui/react-select";
import { Check, Codesandbox, Plus, PlusCircleIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const SizeItem = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "min-h-10 min-w-10 flex justify-center items-center  rounded-md cursor-pointer",
        `${isActive ? "bg-appBlack text-white" : "bg-appBorder text-appBlack"}`
      )}
    >
      {label}
    </div>
  );
};

const ImageItem = ({
  image,
  setFeaturedImages,
}: {
  image: any;
  setFeaturedImages: any;
}) => {
  return (
    <div
      onClick={() => setFeaturedImages(image)}
      className="bg-appNeutral max-w-full max-h-20 hover:border-appPrimary bg-cover bg-center rounded-md flex justify-center items-center p-2"
    >
      <img className="max-h-16 " src={`http://172.86.107.21:3000/images/${image.webp}`} alt="" />
    </div>
  );
};

export default function NewProductPage() {
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const [featuredImages, setFeaturedImages] = useState<any>(null);

  const form = useForm<z.infer<typeof NewProductSchema>>({
    resolver: zodResolver(NewProductSchema),
    defaultValues: {
      product_name: "",
      product_description: "",
      gender: "Men",
      base_price: "",
      stock: "",
      discount: "",
      discount_type: "",
    },
  });

  const onSubmit = (data: z.infer<typeof NewProductSchema>) => {
    console.log(data);
  };

  const handleSizeSelect = (size: string) => {
    if (selectedSize.includes(size)) {
      setSelectedSize(selectedSize.filter((s) => s !== size));
    } else {
      setSelectedSize([...selectedSize, size]);
    }
  };

  const handleAddImage = (data: any) => {
    setSelectedImages([...selectedImages, data]);
  };

  const handleRemoveImage = (image: any) => {
    setSelectedImages(selectedImages.filter((i) => i.webp !== image.webp));
  };

  return (
    <div className="p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Header */}
          <div className="w-full flex justify-between">
            <h1 className="flex items-center gap-2 text-2xl font-semibold text-appBlack">
              <Codesandbox /> Add New Product
            </h1>
            <div className="flex items-center">
              <Button size="sm" className="text-sm flex gap-2" type="submit">
                <Check className="h-4 w-4" />
                Add Product
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-7 gap-4 mt-4">
            <div className="col-span-4">
              <div className=" bg-white border border-appBorder">
                <SectionHeader>General Information</SectionHeader>
                <SectionWrapper className="space-y-4">
                  <FormField
                    control={form.control}
                    name="product_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-appBlack">
                          Product Name
                          <RequiredBadge />
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter product name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="product_description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-appBlack">
                          Product Descripton
                          <RequiredBadge />
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Enter product description"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="">
                      <h2 className="h2">
                        Size
                        <RequiredBadge />
                      </h2>
                      <p className="text-sm text-appMuted">
                        Pick Available Size
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <SizeItem
                          label="XS"
                          isActive={selectedSize.includes("XS")}
                          onClick={() => handleSizeSelect("XS")}
                        />
                        <SizeItem
                          label="S"
                          isActive={selectedSize.includes("S")}
                          onClick={() => handleSizeSelect("S")}
                        />
                        <SizeItem
                          label="M"
                          isActive={selectedSize.includes("M")}
                          onClick={() => handleSizeSelect("M")}
                        />
                        <SizeItem
                          label="XL"
                          isActive={selectedSize.includes("XL")}
                          onClick={() => handleSizeSelect("XL")}
                        />
                        <SizeItem
                          label="XXL"
                          isActive={selectedSize.includes("XXL")}
                          onClick={() => handleSizeSelect("XXL")}
                        />
                      </div>
                    </div>
                    <div className="">
                      <h2 className="h2">
                        Gender
                        <RequiredBadge />
                      </h2>
                      <p className="text-sm text-appMuted">
                        Pick Available Gender
                      </p>
                      <FormField
                        name="gender"
                        control={form.control}
                        render={(field) => (
                          <FormItem className="flex items-center mt-5">
                            <FormControl>
                              <RadioGroup
                                {...field}
                                onValueChange={(e) =>
                                  form.setValue("gender", e)
                                }
                                defaultValue={form.getValues("gender")}
                                className="flex items-center gap-4"
                              >
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="Men" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Men
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="Woman" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Woman
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="Unisex" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Unisex
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </SectionWrapper>
              </div>

              <div className="mt-4 bg-white border border-appBorder">
                <SectionHeader>Pricing And Stock</SectionHeader>
                <SectionWrapper className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="base_price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-appBlack">
                          Base Pricing
                          <RequiredBadge />
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            placeholder="Enter product name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="stock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-appBlack">
                          Stock
                          <RequiredBadge />
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            placeholder="Enter product name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="discount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-appBlack">
                          Discount
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            placeholder="Enter product name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="discount_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-appBlack">
                          Discount Type
                        </FormLabel>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Chinese New Year Discount"></SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Black Friday Discount">
                              Black Friday Discount
                            </SelectItem>
                            <SelectItem value="Summer Sale Discount">
                              Summer Sale Discount
                            </SelectItem>
                            <SelectItem value="Chinese New Year Discount">
                              Chinese New Year Discount
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </SectionWrapper>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-span-3">
              <Card className="bg-white shadow-none rounded-none border border-appBorder">
                <SectionHeader>Upload Image</SectionHeader>
                <SectionWrapper>
                  <div className="bg-appNeutral max-h-72 max-w-full bg-cover bg-center rounded-md flex justify-center items-center p-4">
                    {featuredImages && (
                      <img
                        className="max-h-64 max-w-full"
                        src={`http://172.86.107.21:3000/images/${featuredImages?.webp}`}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {selectedImages.map((image, index) => (
                      <ImageItem
                        image={image}
                        key={index}
                        setFeaturedImages={setFeaturedImages}
                      />
                    ))}

                    <MediaLibModal
                      onClick={(data: any) => handleAddImage(data)}
                    >
                      <div className="cursor-pointer hover:bg-appNeutral/40 border-[2px] border-appBorder border-dashed h-20 bg-cover bg-center rounded-md flex justify-center items-center p-2">
                        <PlusCircleIcon className="text-appBlack" />
                      </div>
                    </MediaLibModal>
                  </div>
                </SectionWrapper>
              </Card>

              <Card className="mt-4 bg-white shadow-none rounded-none border border-appBorder">
                <SectionHeader>Category</SectionHeader>
                <SectionWrapper>
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-appBlack">
                          Product Category
                        </FormLabel>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Jacket"></SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Shirt">Shirt</SelectItem>
                            <SelectItem value="Hoody">Hoody</SelectItem>
                            <SelectItem value="Jins">Jins</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="button" className="mt-4" variant="secondary">
                    Add Category
                  </Button>
                </SectionWrapper>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
