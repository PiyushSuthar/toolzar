import React from "react";
import DarkModeToggle from "./_darkmode_toggle/darkmodeToggle";
import styles from "./header.module.css";
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import Head from "next/head";

export default function header({ title, subtitle, isHomepage }) {
  return (
    <div className={styles.header_home_conatainer}>
      <Head>
        {isHomepage === true ? (
          <title>ToolZar - All The Tools You'll Need</title>
        ) : (
          <title>{`${title} ${subtitle} - ToolZar`}</title>
        )}
      </Head>

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {isHomepage === false ? (
          <Link href="/">
            <a style={{ marginLeft: -5, marginRight: 5 }}>
              <ArrowLeft className={styles.header_backarrow} size="30" />
            </a>
          </Link>
        ) : (
          ""
        )}
        <div className={styles.header_home_title}>
          <h1 style={isHomepage === false ? { fontSize: "20px" } : {}}>
            {isHomepage === false ? title : "Toolzar"}
          </h1>
          <p>{isHomepage === false ? subtitle : "All the tools you need."}</p>
        </div>
      </div>
      <div className={styles.header_home_toggle}>
        <DarkModeToggle />
      </div>
    </div>
  );
}
