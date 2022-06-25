import classes from "../styles/Form.module.css";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";

function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      {children}
      <div className="info">
        Already have an account? <a href="login.html">Login</a> instead.
      </div>
    </form>
  );
}
export default Form;
