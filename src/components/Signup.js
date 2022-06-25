import Illustration from "./Illustaration";

import SignupForm from "../pages/SignupForm";

function Signup() {
  return (
    <>
      <h1> Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}
export default Signup;
