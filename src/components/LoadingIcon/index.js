import React from "react";
import styles from "./loading.module.css";

export default function LoadingIcon() {
  return (
    <div className={styles.loading_icon_outer}>
      <div className={styles.loading_out} />
    </div>
  );
}
