import "./styles.css";
import React, { useState } from "react";
import marked from "marked";
import { INITIALTEXT } from "./InitialText.js";

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

export default function App() {
  const [rawText, setText] = useState(INITIALTEXT);
  return (
    <div className="App">
      <div id="editWrapper" class="wrapper">
        <Toolbar title="Editor" />
        <textarea
          id="editor"
          value={rawText}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div id="prevWrapper" class="wrapper">
        <Toolbar title="Preview" />
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(rawText, { renderer: renderer })
          }}
        />
      </div>
    </div>
  );
}

function Toolbar(props) {
  return (
    <div className="toolbar">
      <h2>{props.title}</h2>
    </div>
  );
}
