import Answeres from "./Answeres";
import classes from "../styles/Qustion.module.css";
export default function Qustion() {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answeres />
    </div>
  );
}
