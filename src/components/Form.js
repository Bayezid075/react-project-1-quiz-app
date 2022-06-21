import classes from "../styles/Form.module.css";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";
function Form({ className, ...rest }) {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      <TextInput type="text" placeholder="Enter Name" icon="person" />
      <TextInput type="text" placeholder="Enter Email" icon="alternate_email" />
      <TextInput type="password" placeholder="Enter Password" icon="lock" />
      <TextInput
        type="password"
        placeholder="Confirm Password"
        icon="lock_clock"
      />
      <Checkbox text="I agree to the Terms & Conditions" />
      <Button> Submit Now </Button>
      <div className="info">
        Already have an account? <a href="login.html">Login</a> instead.
      </div>
    </form>
  );
}
export default Form;
