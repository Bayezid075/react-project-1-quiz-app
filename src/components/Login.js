import Illustration from "./Illustaration";

import classes from "../styles/Login.module.css";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}
