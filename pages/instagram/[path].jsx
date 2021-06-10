import React, { useState, useEffect } from "react";
import Header from "../../components/toolsPage-componets/Header";
import TextInput from "../../components/toolsPage-componets/textInput";
import VideoPlayer from "../../components/videoPlayer";
import { getInstagramData } from "../../utils/instagram";
import { Info } from "react-feather";

export default function Instagram({ title = "Video Downloader" }) {
  // const [isSingle, setIsSingle] = useState(false);
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const url = new URL(window.location);
    if (
      url.searchParams.get("url") &&
      url.searchParams.get("url").includes("instagram.com")
    ) {
      handleSubmit(url.searchParams.get("url"));
    }
  }, []);

  async function handleSubmit(url) {
    if (!url.includes("instagram")) {
      alert("The url must be of Instagram!");
      return;
    }
    try {
      setError(false);

      const { pathname } = new URL(url);
      const instagramUrl = `https://www.instagram.com${pathname}`;

      const data = await getInstagramData(instagramUrl);
      console.log(data);
      setData(data.dataArray);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
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
        onEnter={handleSubmit}
      />
      {isError ? (
        <h3 className="error-text">Error, Check Your URL!</h3>
      ) : (
        <>
          <p className="info">
            <Info
              size="15"
              style={{
                marginRight: "10px",
              }}
            />
            The media might not load due to cors (In simple words, for security
            reasons), but they can be downloaded.
          </p>
          <VideoPlayer isloading={isloading} data={data} />
        </>
      )}
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          path: "image",
        },
      },
      {
        params: {
          path: "video",
        },
      },
      {
        params: {
          path: "reel",
        },
      },
      {
        params: {
          path: "igtv",
        },
      },
    ],
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return {
    props: {
      title: capitalizeFirstLetter(params.path) + " Downloader",
    },
  };
}
