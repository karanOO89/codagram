import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "./markdownDemo.scss";
import "../node_modules/prismjs/themes/prism.css";
import "../node_modules/prismjs/themes/prism-okaidia.css";

function BlankCodeBlock({ value }) {
  return <pre className="language-">{value || ""}</pre>;
}

function CodeBlock({ language, value }) {
  if (!language || !Prism.languages[language] || !value)
    return <BlankCodeBlock value={value} />;

  const html = Prism.highlight(value, Prism.languages[language]);
  const cls = "language-" + language;

  return (
    <pre className={cls}>
      <code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
    </pre>
  );
}

export default function MarkDownDemo() {
  const [markdown, setMarkdown] = useState("# sup");

  return (
    <StyledApp>
      <StyledEditor>
        <textarea
          onChange={(e) => setMarkdown(e.target.value)}
          value={markdown}
        />
      </StyledEditor>

      <StyledPreview>
        <ReactMarkdown
          source={markdown}
          renderers={{ code: CodeBlock({ language: "html", value: markdown }) }}
        >
          {/* {CodeBlock ("javascript",{markdown})} */}
          {/* {markdown} */}
        </ReactMarkdown>
      </StyledPreview>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  margin-top: 5em;

  div {
    flex: 1;
    padding: 10px;
  }
`;

const StyledEditor = styled.div`
  background: #efefef;

  textarea {
    width: 100%;
    padding: 5px;
    height: 100%;
    border-radius: 5px;
    border: 1px solid #e2e2e2;
  }
`;

const StyledPreview = styled.div`
  background: #f8f8f8;

  pre {
    background: #333;
    color: #eee;
    padding: 30px;
  }
`;
