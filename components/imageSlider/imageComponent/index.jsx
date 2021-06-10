import React, { useEffect, useState } from "react";
import styles from "./imageComponent.module.css";
import { Download } from "react-feather";
import LoadingIcon from "../../LoadingIcon";

export default function Image({ url }) {
  // const [loading, setLoading] = useState(false);

  // if (loading === true) {
  //   return <LoadingIcon />;
  // } else {
  return (
    <div className={styles.image_container}>
      <img crossOrigin="anonymous" src={url} alt="Instagram" />
      <a href={url + "&dl=1"} style={{ width: "auto" }}>
        <Download size="40px" className={styles.image_download} />
      </a>
    </div>
  );
  // }
}
