import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function Cards({ data, type }) {
  return (
    <div className={styles.cards_main_container}>
      <h4 className={styles.cards_title}>{type}</h4>
      <div className={styles.cards_container}>
        {data.map((value, index) => (
          <Card indexx={index} key={index} data={value} />
        ))}
      </div>
    </div>
  );
}
function Card({ data, index }) {
  const [isOnline, setOnline] = useState(true);
  useEffect(() => {
    if (navigator.onLine) {
      setOnline(true);
    } else {
      setOnline(false);
    }
  }, []);
  return (
    <Link
      style={
        !isOnline && data.isOffline === false
          ? { pointerEvents: "none", opacity: "0.5" }
          : {}
      }
      className={styles.card_link}
      to={data.path}
    >
      <div className={styles.card_outer}>
        <h4>{data.category}</h4>
        <h1>{data.Name}</h1>
      </div>
    </Link>
  );
}
