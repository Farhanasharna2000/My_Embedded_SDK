// bundle.tsx
import * as React from "react";
import { createRoot } from "react-dom/client"; 
import EmbeddedForm from "./components/EmbeddedForm";

type EmbeddedFormStyles = {
  button?: React.CSSProperties;
  form?: React.CSSProperties;
  label?: React.CSSProperties;
  input?: {
    text?: React.CSSProperties;
    select?: React.CSSProperties;
  };
};

declare global {
  interface Window {
    renderEmbeddedFormForm: (
      selector: string,
      dataKey: string,
      styles?: EmbeddedFormStyles
    ) => void;
  }
}

window.renderEmbeddedFormForm = (
  selector: string,
  dataKey: string,
  styles?: EmbeddedFormStyles
) => {
  const el = document.querySelector(selector);
  if (el) {
    const root = createRoot(el);
    root.render(<EmbeddedForm dataKey={dataKey} styles={styles} />);
  }
};