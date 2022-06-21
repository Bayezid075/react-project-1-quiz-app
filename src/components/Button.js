import classes from "../styles/Button.module.css";

function Button({ children }) {
  return (
    <>
      <button className={classes.button}>
        <span>{children}</span>
      </button>
    </>
  );
}
export default Button;
