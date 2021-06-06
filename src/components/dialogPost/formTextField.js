import React from "react-dom";
import './formTextField.scss';
import TextEditor from "../TextEditor";
const FormTextfield = (props) => {
  return <div>
      <form>
    <TextEditor editorStyle={{width:"100%",height:"300px"}}/>
</form>
  </div>;
};
export default FormTextfield;
