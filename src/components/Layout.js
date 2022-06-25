import Nav from "./Nav";
import classes from "../styles/Layout.module.css";
import { BrowserRouter as Router } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}
export default Layout;
