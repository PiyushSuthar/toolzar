import { render } from "preact";
import App from "./App";
import { registerSW } from "virtual:pwa-register";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

const updateSW = registerSW({
  onOfflineReady() {
    // show a ready to work offline to user
    alert("Ready To Work Offline");
  },
});
updateSW(true);
