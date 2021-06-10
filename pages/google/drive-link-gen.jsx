import React, { useState, useEffect } from "react";
import Header from "../../components/toolsPage-componets/Header";
import TextInput from "../../components/toolsPage-componets/textInput";
import CopyTextBox from "../../components/toolsPage-componets/copyTextBox";

const GenerateUrl = (url, setUrl) => {
  if (url.indexOf("open") !== -1) {
    var parsedUrl = new URL(url);
    let driveId = parsedUrl.search.slice(4);
    let newUrl = `https://drive.google.com/uc?export=download&id=${driveId}`;
    setUrl(newUrl);
  } else {
    var indexOfD = url.indexOf("d/");
    var indexOfView = url.indexOf("/view");
    let driveId = url.slice(indexOfD + 2, indexOfView);
    let newUrl = `https://drive.google.com/uc?export=download&id=${driveId}`;
    setUrl(newUrl);
  }
};

export default function DriveLinkGenerator() {
  const [url, setUrl] = useState("");
  const [modifiedUrl, setModifiedUrl] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (!url.includes("drive.google.com")) return;
    GenerateUrl(url, setModifiedUrl);
    setShowInput(true);
  }, [url]);
  return (
    <>
      <Header
        title="Google Drive"
        subtitle="Link Generator"
        image="https://source.unsplash.com/random"
      />
      <TextInput
        title="Direct Download Link Generator"
        linkIcon={true}
        placeholder="https://drive.google.com/file/d/..."
        onEnter={setUrl}
      />
      {showInput ? <CopyTextBox value={modifiedUrl} /> : ""}
    </>
  );
}
