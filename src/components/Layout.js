import Nav from "./Nav";
import classes from "../styles/Layout.module.css";

function Layout({ Children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{Children}</div>
      </main>
    </>
  );
}
export default Layout;
