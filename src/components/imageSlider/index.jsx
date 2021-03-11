import React, { useState, useEffect } from "react";
import ImageComponent from "./imageComponent";
import styles from "./imageSlider.module.css";

export default function ImageSlider({ isSingle, data, load }) {
  const [Igdata, SetIgData] = useState("");
  useEffect(() => {
    SetIgData(data);
  }, [data]);
  if (load === true) {
    return (
      <div className={styles.image_slider}>
        {isSingle ? (
          <ImageComponent className={styles.imageSlide_child} url={Igdata} />
        ) : (
          Igdata.map((data, index) => (
            <ImageComponent
              className={styles.imageSlide_child}
              key={index}
              url={
                data.node.display_resources[
                  data.node.display_resources.length - 1
                ].src
              }
            />
          ))
        )}
      </div>
    );
  } else {
    return "";
  }
}
