import classes from "../styles/Illustration.module.css";
import signupImg from "../assets/images/signup.svg";
function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signupImg} alt="Signup" />
    </div>
  );
}
export default Illustration;
