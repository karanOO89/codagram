import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia,twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    console.log();
    // console.log(children)
    return !inline && match ? (
      <SyntaxHighlighter
        style={twilight }
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};

const MarkdownView = (props) => {
  const url ="http://www.pythontutor.com/javascript.html#code=&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D"
  return (
    <div>
      <StyledPreview >
        <ReactMarkdown children={props.markdown} components={components} linkTarget={url} />
      </StyledPreview>
    </div>
  );
};
const StyledPreview = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 0, 0, 0);
  // background: #b4d4f2;
  height: 100%;
  width: 100%;
  overflow-wrap: break-word;
  pre {
    width: 100%;
    // padding: px;
    overflow-x: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }
`;
export default MarkdownView;
