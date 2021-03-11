import React from "react";
import styles from "./heroSection.module.css";

export default function HeroSection({ title, subtitle, image }) {
  return (
    <div
      style={{
        background: ` linear-gradient(101.39deg, #000000 -30.25%, rgba(0, 0, 0, 0) 123.84%),url(${image})`
      }}
      className={styles.herosection_main}
    >
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  );
}
