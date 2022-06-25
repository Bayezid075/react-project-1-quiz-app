import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "../pages/Home";
import Videos from "./Videos";
import Signup from "./Signup";
import Quiz from "./Quiz";
import Result from "../pages/Result";
import Login from "./Login";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
