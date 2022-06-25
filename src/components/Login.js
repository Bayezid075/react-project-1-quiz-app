import Button from "./Button";
import Form from "./Form";
import Illustration from "./Illustaration";
import TextInput from "./TextInput";
import classes from "../styles/Login.module.css";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.login}`}>
          <TextInput type="text" placeholder="Enter Email" />
          <TextInput text="password" placeholder="Enter Password" />
          <Button className={classes.button}>
            <span> Submit Now </span>
          </Button>
          <br />
          <div className={classes.info}>
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
