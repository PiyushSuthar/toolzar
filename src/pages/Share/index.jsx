import React, { useEffect } from "react";
import Header from "../../components/Header/header";

export default function Share() {
  const parsedUrl = new URL(window.location);
  const url = parsedUrl.searchParams.get("url");
  useEffect(() => {
    if (url) {
      if (url.includes("instagram")) {
        window.location.href = `https://${parsedUrl.hostname}/instagram/video?url=${url}`;
      } else if (url.includes("drive.google.com")) {
        window.location.href = `https://${parsedUrl.hostname}/google/drive-link-gen?url=${url}`;
      } else {
        window.location.href = `https://${parsedUrl.hostname}/`;
      }
    } else {
      window.location.href = `https://${parsedUrl.hostname}/`;
    }
  });
  return (
    <Header
      title="Share"
      subtitle="Direct Sharing"
      image="https://source.unsplash.com/1600x900/?sharing"
    />
  );
}
