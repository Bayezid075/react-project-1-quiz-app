import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "../pages/Home";
import Videos from "./Videos";
import Signup from "./Signup";
import Quiz from "./Quiz";
import Result from "../pages/Result";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Videos />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>{" "}
      </Layout>
    </Router>
  );
}

export default App;
