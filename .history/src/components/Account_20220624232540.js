import classes from "../styles/Account.module.css";
function Account() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signupml">Signup</Link>
      <span className="material-icons-outlined" title="Logout">
        logout
      </span>
    </div>
  );
}
export default Account;
