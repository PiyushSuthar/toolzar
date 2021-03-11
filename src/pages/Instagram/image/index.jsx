import React, { useState, useEffect } from "react";
import Header from "../../../components/toolsPage-componets/Header";
import TextInput from "../../../components/toolsPage-componets/textInput";
import ImageSlider from "../../../components/imageSlider";
// import instagramDataTestConfig from "../../../configs/instagramData.test.config";

export default function InstagramImage() {
  const [toLoad, setToLoad] = useState(false);
  const [data, setData] = useState([]);
  const [isSingle, setIsSingle] = useState(false);
  const [url, setUrl] = useState("");
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (!url.includes("instagram")) return;
    setData([]);
    setError(false);
    var parsedUrl = new URL(url);
    var apiUrl = `https://instagram.com/${parsedUrl.pathname}?__a=1`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        if (data.graphql.shortcode_media.edge_sidecar_to_children) {
          setData(data.graphql.shortcode_media.edge_sidecar_to_children.edges);
          setIsSingle(false);
          setToLoad(true);
        } else {
          setData(
            data.graphql.shortcode_media.display_resources[
              [data.graphql.shortcode_media.display_resources.length - 1]
            ].src
          );
          setIsSingle(true);
          setToLoad(true);
        }
      })
      .catch(err => {
        setError(true);
        console.log(err);
      });
  }, [url]);

  // const ImageDownloader = url => {};
  return (
    <>
      <Header
        title="Instagram"
        subtitle="Image Downloader"
        image="https://source.unsplash.com/1600x900/?instagram"
      />
      <TextInput
        title="Image Downloader"
        placeholder="https://instagram.com/p/..."
        onEnter={e => {
          setUrl(e);
        }}
      />
      {isError ? (
        <h3 className="error-text">Error, Check Your URL!</h3>
      ) : (
        <ImageSlider isSingle={isSingle} load={toLoad} data={data} />
      )}
    </>
  );
}
