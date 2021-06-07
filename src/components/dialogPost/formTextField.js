import React from "react";
import "./formTextField.scss";
import MarkDown from "../../markdown/markdown";
const FormTextfield = (props) => {
  console.log(props);
  // const [markdown,setMarkdown] = useState("# sup")
  return (
    <div>
      <form>
        {/* <TextEditor editorStyle={{width:"100%",height:"300px"}}/> */}
        <MarkDown markdown={props.markdown} setMarkdown={props.setMarkdown} />
      </form>
    </div>
  );
};
export default FormTextfield;
