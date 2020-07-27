import React, { useEffect, useRef } from "react";
import styles from "./textinput.module.css";
import { Download, Link } from "react-feather";

export default function TextInput({ title, linkIcon, placeholder, onEnter }) {
  const input = useRef();
  useEffect(() => {
    // input.current.focus();
  });
  function handleSubmit(e) {
    e.preventDefault();
    onEnter(input.current.value);
    input.current.value = "";
  }
  return (
    <div className={styles.textinput_main_outer}>
      <h3 className={styles.textinput_title}>{title}</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.textinput_container}>
          <input
            type="url"
            ref={input}
            placeholder={placeholder}
            className={styles.textinput_main}
          />
          <button type="submit">
            {linkIcon ? (
              <Link
                type="submit"
                style={{ cursor: "pointer" }}
                className={styles.textinput_button}
              />
            ) : (
              <Download
                type="submit"
                style={{ cursor: "pointer" }}
                className={styles.textinput_button}
              />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
