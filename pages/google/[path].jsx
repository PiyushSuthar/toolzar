import React, { useEffect, useState } from "react";
import Header from "../../components/toolsPage-componets/Header";
import TextInput from "../../components/toolsPage-componets/textInput";

export default function YoutubeDownloader({ type }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (url.includes("youtube.com")) {
      DownLoad();
    } else if (url.includes("youtu.be")) {
      DownLoad();
    } else {
      return;
    }
    function DownLoad() {
      var api = `https://covid-img.azurewebsites.net/${
        type === "Mp3" ? "mp3" : "mp4"
      }?url=`;
      window.open(`${api}${url}`);
    }
  }, [url, type]);
  return (
    <>
      <Header
        title="YouTube"
        image="https://source.unsplash.com/1600x900/?youtube"
        subtitle={`${type} Downlaoder`}
      />
      <TextInput
        title={`${type} Downlaoder`}
        placeholder="https://youtube.com/watch?..."
        onEnter={setUrl}
      />
    </>
  );
}
export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          path: "youtube-music",
        },
      },
      {
        params: {
          path: "youtube-video",
        },
      },
    ],
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      type: params.path === "youtube-music" ? "Mp3" : "Mp4",
    },
  };
}
