import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/index";
import "./styles.css";
import { InstagramImage, InstagramVideo } from "./pages/Instagram/index";
import { DriveLinkGenerator, YoutubeDownloader } from "./pages/Google";

export default function App() {
  return (
    <Router>
      <div className="main_body_conatainer">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/instagram/image" component={InstagramImage} />
          <Route path="/instagram/video">
            <InstagramVideo title="Video Downloader" />
          </Route>
          <Route path="/instagram/igtv">
            <InstagramVideo title="IGTV Downloader" />
          </Route>
          <Route path="/instagram/reel">
            <InstagramVideo title="Reel Downloader" />
          </Route>
          <Route path="/google/drive-link-gen" component={DriveLinkGenerator} />
          <Route path="/google/youtube-video">
            <YoutubeDownloader type="Video" />
          </Route>
          <Route path="/google/youtube-music">
            <YoutubeDownloader type="Mp3" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
