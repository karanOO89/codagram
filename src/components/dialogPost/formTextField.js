import React from "react";
import "./formTextField.scss";
import styled from "styled-components";
import MarkdownView from "./markdownView";

const FormTextfield = (props) => {
  return (
    <StyledApp>
      <div className="preview" style={{ overflowWrap: "break-word" }}>
        <MarkdownView markdown={props.markdown} />
      </div>
      <div>
        <StyledEditor>
          <textarea
            placeholder="type here..."
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
  
  flex-direction: column;
  justify-content:space-between;
  align-items-center;
  width: 60vh;
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
  background: #b4d4f2;
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
