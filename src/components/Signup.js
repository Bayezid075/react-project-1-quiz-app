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
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms & Conditions" />
          <Button>
            <span>Submit Now</span>{" "}
          </Button>
        </Form>
      </div>
    </>
  );
}
export default Signup;
