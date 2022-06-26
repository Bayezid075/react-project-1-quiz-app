import classes from "../styles/Login.module.css";
import TextInput from "./TextInput";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Form from "./Form";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      setLoading("false");
      setError("Failed to Login");
      console.log(error);
    }
  }

  return (
    <Form className={`${classes.login}`} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        text="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <span className="error"> {error} </span>}
      <Button type="submit" className={classes.button}>
        <span> Submit Now </span>
      </Button>
      <br />
      <div className={classes.info}>
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
