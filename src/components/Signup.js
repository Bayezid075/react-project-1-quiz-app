import Illustration from "./Illustaration";
import Form from "./Form";
import classes from "../styles/Signup.module.css";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";

function Signup() {
  return (
    <>
      <h1> Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}></Form>
      </div>
    </>
  );
}
export default Signup;
