import React from "react";
import styles from "./videoComponent.module.css";
import { Download } from "react-feather";
// import LoadingIcon from "../../LoadingIcon";

export default function VideoComponent({ src }) {
  return (
    <div className={styles.video_C_main}>
      {/* {loaded === false ? (
        <div className={styles.video_download_btn_link}>
          <LoadingIcon />
          <p style={{ marginRight: "8px" }}>Loading</p>
        </div>
      ) : ( */}
        <a className={styles.video_download_btn_link} href={src}>
          <Download size="15" className={styles.video_download_btn} />
          <p>Download</p>
        </a>
      {/* )} */}
      <video src={src} className={styles.video} controls />
    </div>
  );
}
