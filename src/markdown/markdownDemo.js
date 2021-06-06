import React, { useState } from "react";
// import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "./markdownDemo.scss";
import "../../node_modules/prismjs/themes/prism.css";
import "../../node_modules/prismjs/themes/prism-okaidia.css";

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
      <div className="preview">
        <StyledPreview>
          <article>
          <ReactMarkdown source={markdown} renderers={{ code: CodeBlock }}>
          
            {markdown}
          </ReactMarkdown>
          </article>
        </StyledPreview>

      </div>
      <div></div>
        <StyledEditor>
          <textarea
            onChange={(e) => setMarkdown(e.target.value)}
            value={markdown}
          />
        </StyledEditor>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  background: green;
  flex-direction: column;
  justify-content:space-between;
  align-items-center;
  width: 75vh;
  height: 50vh;
  margin-top: 1em;
  

  div {
    flex: 1;
    padding: 10px;
  }
  .edit{
    
    // padding-top:5em;
    padding-bottom:.5em;
    postion:fixed;
  }
`;

const StyledEditor = styled.div`
  background: #efefef;


  width: 100%;
  textarea {
    width: 100%;
    padding: 5px;
    height: 10vh;
    border-radius: 5px;
    border: 1px solid #e2e2e2;
    resize:none
  }
`;

const StyledPreview = styled.div`
  background: yellow;
  height: 100%;
  width: 100%;
  overflow-wrap: break-word;
  pre {
    background: #333;
    width: 100%;
    color: #eee;
    padding: 30px;
  }
`;
