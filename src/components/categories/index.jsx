import React from "react";
import styles from "./category.module.css";

export default function Categories({ data, setcategory }) {
  return (
    <div className={styles.category_container}>
      {data.map(({ title, image }, index) => (
        <Category
          setcategory={setcategory}
          key={index}
          title={title}
          image={image}
        />
      ))}
    </div>
  );
}

function Category({ title, image, setcategory }) {
  return (
    <div
      style={{
        background: `linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 113.74%),url(${image})`,
        cursor: "pointer"
      }}
      onClick={() => {
        setcategory(title);
      }}
      className={styles.category_main}
    >
      <h2>{title}</h2>
    </div>
  );
}
