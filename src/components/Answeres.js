import Checkbox from "./Checkbox";
import classes from "../styles/Answeres.module.css";
function Answeres() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="test answere" />
    </div>
  );
}
export default Answeres;
