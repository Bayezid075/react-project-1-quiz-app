import "../styles/App.css";
import Layout from "./Layout";
import Home from "../pages/Home";
import Videos from "./Videos";
import Signup from "./Signup";
function App() {
  return (
    <Layout>
      {/* <Videos /> */}
      <Signup />
    </Layout>
  );
}

export default App;
