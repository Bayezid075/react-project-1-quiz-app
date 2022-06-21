import "../styles/App.css";
import Layout from "./Layout";
import Home from "../pages/Home";
import Videos from "./Videos";
import Signup from "./Signup";
import Quiz from "./Quiz";
import Result from "../pages/Result";
function App() {
  return (
    <Layout>
      {/* <Videos /> */}
      {/* <Signup /> */}
      {/* <Quiz /> */}
      <Result />
    </Layout>
  );
}

export default App;
