import React from "react";
import { createRoot } from "react-dom/client";
import EmbeddedForm from "./components/EmbeddedForm";

declare global {
  interface Window {
    renderEmbeddedForm: (
      selector: string,
      dataKey: string,
      styles?: any
    ) => void;
  }
}

window.renderEmbeddedForm = (selector, dataKey, styles) => {
  const el = document.querySelector(selector);
  if (!el) return;

  const root = createRoot(el);
  root.render(<EmbeddedForm dataKey={dataKey} styles={styles} />);
};
