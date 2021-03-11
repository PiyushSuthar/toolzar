import React, { useState, useEffect } from "react";
import VideoComponent from "./videoComponent";
import styles from "./videoPlayer.module.css";
import ImageComponent from "../imageSlider/imageComponent";

export default function VideoPlayer({ data, isloading, isSingle }) {
  const [IGData, setIGdata] = useState("");

  useEffect(() => {
    setIGdata(data);
  }, [data]);

  if (isloading) {
    return "";
  } else {
    return (
      <div className={styles.videoPlayer}>
        {IGData.map((value, index) =>
          value.isVideo ? (
            <VideoComponent key={index} src={value.src} />
          ) : (
            <ImageComponent url={value.src} key={index} />
          )
        )}
      </div>
    );
  }
}
