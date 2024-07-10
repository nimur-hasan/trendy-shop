'use client'

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import MediaLibContent from "./media-lib-content";
import MediaLibUpload from "./media-lib-upload";

export function MediaLibModal({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: any;
}) {
  const [refetch, setRefetch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Media Library</DialogTitle>
          {/* <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription> */}
        </DialogHeader>
        <div className="flex flex-col space-x-2">
          <MediaLibUpload setRefetch={setRefetch} />

          <MediaLibContent
            size="sm"
            refetch={refetch}
            onClick={(data: any) => {
              console.log("clicked: ", data);
              setIsOpen(false);
              onClick(data);
            }}
          />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
