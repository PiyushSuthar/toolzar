import React, { useState, useEffect } from "react";
import Header from "../../../../components/toolsPage-componets/Header";
import TextInput from "../../../../components/toolsPage-componets/textInput";
import CopyTextBox from "../../../../components/toolsPage-componets/copyTextBox";
import GenerateUrl from "../../../../utils/google/drive/linkGenerator";

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
