import React from "react-dom";
import './formTextField.scss';
import TextEditor from "../TextEditor";
import MarkDownDemo from "../../markdown/markdownDemo";
// import Quill from "../quill";x
const FormTextfield = (props) => {
  return <div>
      <form>
    {/* <TextEditor editorStyle={{width:"100%",height:"300px"}}/> */}
    <MarkDownDemo/>
    {/* <Quill/> */}
</form>
  </div>;
};
export default FormTextfield;
