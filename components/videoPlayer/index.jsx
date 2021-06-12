import React, { useState, useEffect } from "react";
import VideoComponent from "./videoComponent";
import styles from "./videoPlayer.module.css";
import ImageComponent from "../imageSlider/imageComponent";

export default function VideoPlayer({ data, isloading }) {
  const [IGData, setIGdata] = useState("");

  useEffect(() => {
    setIGdata(data);
    return () => setIGdata("");
  }, [data]);

  if (isloading) {
    return "";
  } else {
    return (
      <div className={styles.videoPlayer}>
        {IGData.map((value, index) => {
          const src = `https://instagram-bypass.vercel.app/convert?url=${encodeURIComponent(
            value.src
          )}`;
          return value.isVideo ? (
            <VideoComponent key={index} src={src} />
          ) : (
            <ImageComponent url={src} key={index} />
          );
        })}
      </div>
    );
  }
}
