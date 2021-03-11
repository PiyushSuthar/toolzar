import React, { useEffect, useState } from "react";
import styles from "./imageComponent.module.css";
import { Download } from "react-feather";
import ImageToBase64 from "../../../utils/ImageToBase64";
import LoadingIcon from "../../LoadingIcon";

export default function Image({ url }) {
  const [base64Image, setBase64data] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBase64data("");
    ImageToBase64(url).then(data => {
      setBase64data(data);
      setLoading(false);
    });
  }, [url]);
  // const base64Image = await ImageToBase64(url);
  if (loading === true) {
    return <LoadingIcon />;
  } else {
    return (
      <div className={styles.image_container}>
        <img src={base64Image} alt="Instagram" />
        <a href={base64Image} style={{ width: "auto" }} download>
          <Download size="40px" className={styles.image_download} />
        </a>
      </div>
    );
  }
}
