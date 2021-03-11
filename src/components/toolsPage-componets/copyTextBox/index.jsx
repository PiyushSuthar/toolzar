import React, { useRef, useEffect, useState } from "react";
import styles from "../textInput/textinput.module.css";
import { Copy } from "react-feather";

export default function CopyTextBox({ value }) {
  const input = useRef();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  function handleCopy(e) {
    input.current.select();
    input.current.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  return (
    <div className={styles.textinput_main_outer}>
      <h3 onClick={handleCopy} className={styles.textinput_title}>
        Copy
      </h3>
      <div className={styles.textinput_container}>
        <input
          ref={input}
          value={inputValue}
          className={styles.textinput_main}
          readOnly
        />
        <Copy
          style={{ cursor: "pointer" }}
          className={styles.textinput_button}
          onClick={handleCopy}
        />
      </div>
    </div>
  );
}
