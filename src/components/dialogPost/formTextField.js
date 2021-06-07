import React from "react";
import "./formTextField.scss";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={okaidia}
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
const FormTextfield = (props) => {
  console.log(props);

  return (
    <StyledApp>
      <div className="preview" style={{ overflowWrap: "break-word" }}>
        <StyledPreview>
          <ReactMarkdown children={props.markdown} components={components} />
        </StyledPreview>
      </div>
      <div>
        <StyledEditor>
          <textarea
            onChange={(e) => props.setMarkdown(e.target.value)}
            value={props.markdown}
          />
        </StyledEditor>
      </div>
    </StyledApp>
  );
};
export default FormTextfield;

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
    
    padding-bottom:.5em;
    postion:fixed;
  }
`;

const StyledEditor = styled.div`
  background: #efefef;
  position: absolute;
  left: 0;
  bottom: 20px;

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

const StyledPreview = styled.div`
  display: flex;
  flex-direction: column;
  background: yellow;
  height: 100%;
  width: 100%;
  overflow-wrap: break-word;
  pre {
    width: 100%;
    padding: 30px;
    overflow-x: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }
`;
