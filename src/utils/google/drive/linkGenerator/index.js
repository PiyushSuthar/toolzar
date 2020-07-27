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

export default GenerateUrl;
