import React, { useState, useEffect } from "react";
import Header from "../../../components/toolsPage-componets/Header";
import TextInput from "../../../components/toolsPage-componets/textInput";
import VideoPlayer from "../../../components/videoPlayer";
import { generateData } from "../../../utils/instagram/VideoDownloader";
import IGCraper from "igcraper";

export default function InstagramVideo({ title }) {
  // const [isSingle, setIsSingle] = useState(false);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [isloading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    handleSubmit(url);
  }, [url]);

  useEffect(() => {
    const parsedUrl = new URL(window.location);
    if (!parsedUrl.searchParams.get("url")) return;
    if (parsedUrl.searchParams.get("url").includes("instagram.com")) {
      handleSubmit(parsedUrl.searchParams.get("url"));
    }
  }, []);

  function handleSubmit(funcUrl) {
    if (!funcUrl.includes("instagram")) return;
    const igCraper = new IGCraper();
    setData([]);
    setError(false);
    const parsedUrl = new URL(funcUrl);
    const api = `https://www.instagram.com${parsedUrl.pathname}`;

    igCraper
      .getPost(api)
      .then((res) => {
        const { dataArray } = igCraper.filterPost(res);
        setData(dataArray);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }

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
        onEnter={(e) => {
          setUrl(e);
        }}
      />
      {isError ? (
        <h3 className="error-text">Error, Check Your URL!</h3>
      ) : (
        <VideoPlayer isloading={isloading} data={data} />
      )}
    </>
  );
}
