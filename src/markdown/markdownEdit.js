import React, { useState } from "react";
import styled from "styled-components";

import "./markdownDemo.scss";
import "../../node_modules/prismjs/themes/prism.css";
import "../../node_modules/prismjs/themes/prism-okaidia.css";

export default function MarkdownEdit(props) {
  const [markdown, setMarkdown] = useState("# sup");

  return (
    <StyledEditor >
      <textarea
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
        text ={markdown}
      />
    </StyledEditor>
  );
}

const StyledEditor = styled.div`
  background: #efefef;

  width: 100%;
  textarea {
    width: 100%;
    padding: 5px;
    height: 10vh;
    border-radius: 5px;
    border: 1px solid #e2e2e2;
    resize: none;
  }
`;
