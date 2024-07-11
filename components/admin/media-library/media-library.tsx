"use client";

import React from "react";
import MediaLibWrappwer from "./media-lib-wrapper";
import MediaLibHeader from "./media-lib-header";
import MediaLibContent from "./media-lib-content";

export default function MediaLibrary() {
  return (
    <MediaLibWrappwer>
      <MediaLibHeader />
      <MediaLibContent size="md" onClick={() => {}} refetch="" />
    </MediaLibWrappwer>
  );
}
