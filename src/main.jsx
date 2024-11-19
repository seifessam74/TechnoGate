import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "@studio-freight/lenis";
import "./index.css";
import App from "./App.jsx";

// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="lenis lenis-smooth" data-scroll-orientation="vertical">
      <App />
    </div>
  </StrictMode>
);
