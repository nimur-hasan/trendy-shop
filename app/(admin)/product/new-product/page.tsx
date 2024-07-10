"use client";
import SectionHeader from "@/components/admin/section-header";
import SectionWrapper from "@/components/admin/section-wreapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { NewProductSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Check, Codesandbox, Plus } from "lucide-react";
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
        `${
          isActive ? "bg-appBlack text-white" : "bg-appBorder text-appBlack"
        }`
      )}
    >
      {label}
    </div>
  );
};

export default function NewProductPage() {
  const [selectedSize, setSelectedSize] = useState<string[]>([]);

  const form = useForm<z.infer<typeof NewProductSchema>>({
    resolver: zodResolver(NewProductSchema),
    defaultValues: {
      product_name: "",
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
  return (
    <div className="p-8">
      {/* Header */}
      <div className="w-full flex justify-between">
        <h1 className="flex items-center gap-2 text-2xl font-semibold text-appBlack">
          <Codesandbox /> Add New Product
        </h1>
        <div className="flex items-center">
          <Button size="sm" className="text-sm flex gap-2">
            <Check className="h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Content */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-7 gap-4 mt-4">
            <div className="col-span-4 bg-white border border-appBorder">
              <SectionHeader>General Information</SectionHeader>
              <SectionWrapper className="space-y-4">
                <FormField
                  control={form.control}
                  name="product_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-appBlack">
                        Product Name
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter product name" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="product_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-appBlack">
                        Product Name
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Enter product description"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="">
                    <h2 className="h2">Size</h2>
                    <p className="text-sm text-appMuted">Pick Available Size</p>
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
                    <h2 className="h2">Gender</h2>
                    <p className="text-sm text-appMuted">
                      Pick Available Gender
                    </p>
                    <div className="flex items-center gap-2 mt-5">
                      <RadioGroup className="flex items-center gap-2">
                        <RadioGroupItem value="Men" id="Men" />
                        <Label>Men</Label>
                      </RadioGroup>
                      <RadioGroup className="flex items-center gap-2">
                        <RadioGroupItem value="Woman" id="Woman" />
                        <Label>Woman</Label>
                      </RadioGroup>
                      <RadioGroup className="flex items-center gap-2">
                        <RadioGroupItem value="Unisex" id="Unisex" />
                        <Label>Unisex</Label>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
