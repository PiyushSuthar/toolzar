import React from "react";
import styles from "./footer.module.css";
import { GitHub } from "react-feather";

export default function Footer() {
  return (
    <>
      <div className={styles.footer_conatiner}>
        <div className={styles.footer_copyright}>
          <h3>Made With ❤ By Piyush Suthar</h3>
          <h6>OPEN SOURCE</h6>
        </div>
        <div className={styles.footer_links}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/piyushsuthar/toolzar"
          >
            <GitHub size="35" className={styles.footer_icon} />
          </a>
        </div>
      </div>
    </>
  );
}
