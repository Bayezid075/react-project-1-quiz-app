import "../styles/App.css";
import Layout from "./Layout";
import Home from "../pages/Home";
import Videos from "./Videos";
import Signup from "./Signup";
import Quiz from "./Quiz";
function App() {
  return (
    <Layout>
      {/* <Videos /> */}
      {/* <Signup /> */}
      <Quiz />
    </Layout>
  );
}

export default App;
