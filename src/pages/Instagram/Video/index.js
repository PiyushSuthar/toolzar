import React, { useState, useEffect } from "react";
import Header from "../../../components/toolsPage-componets/Header";
import TextInput from "../../../components/toolsPage-componets/textInput";
import VideoPlayer from "../../../components/videoPlayer";
import { generateData } from "../../../utils/instagram/VideoDownloader";

export default function InstagramVideo({ title }) {
  const [isSingle, setIsSingle] = useState(false);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [isloading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (!url.includes("instagram")) return;
    setData([]);
    setError(false);
    const parsedUrl = new URL(url);
    const api = `https://www.instagram.com/${parsedUrl.pathname}?__a=1`;
    fetch(api)
      .then(res => res.json())
      .then(data => {
        if (data.graphql.shortcode_media.video_url) {
          // setData(data.graphql.shortcode_media.video_url);
          generateData(data, setData);
          setIsSingle(true);
          setLoading(false);
        } else {
          generateData(data, setData);
          // setData(data.graphql.shortcode_media.edge_sidecar_to_children.edges);
          setIsSingle(false);
          setLoading(false);
        }
      })
      .catch(err => {
        setError(true);
        console.error(err);
      });
  }, [url]);

  return (
    <>
      <Header
        title="Instagram"
        subtitle={title}
        image="https://source.unsplash.com/1600x900/?instagram"
      />
      <TextInput
        title={title}
        placeholder="https://instagram.com/..."
        onEnter={e => {
          setUrl(e);
        }}
      />
      {isError ? (
        <h3 className="error-text">Error, Check Your URL!</h3>
      ) : (
        <VideoPlayer isloading={isloading} isSingle={isSingle} data={data} />
      )}
    </>
  );
}
