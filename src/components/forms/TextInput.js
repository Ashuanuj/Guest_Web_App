import React from 'react';
import { FormGroup,Input} from 'reactstrap';

const TextInput = ({ input,label, type, meta: { touched, error, warning } }) => (
 
  <FormGroup>
      <Input {...input} placeholder={label} type={type} className="input-bgColor"/>
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
  </FormGroup>

);
  
export default TextInput;