import React from "react-dom";
import './formTextField.scss';
import TextField from "@material-ui/core/TextField"
const FormTextfield = (props) => {
  return <div>
      <form>
    <TextField id="outlined-basic" label="Outlined" variant="outlined"color ="secondary" fullWidth required/>
</form>
  </div>;
};
export default FormTextfield;
