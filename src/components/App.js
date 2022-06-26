import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "../pages/Home";
import Videos from "./Videos";
import Signup from "./Signup";
import Quiz from "./Quiz";
import Result from "../pages/Result";
import Login from "./Login";
import { AuthProvider } from "../context/AuthContext";
import SignupForm from "../pages/SignupForm";
import PrivetRoute from "./PrivetRoute";
import PublicRoute from "./PublicRoute";
function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Videos />} />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/quiz"
            element={
              <PrivetRoute>
                <Quiz />
              </PrivetRoute>
            }
          />
          <Route
            path="/result"
            element={
              <PrivetRoute>
                <Result />
              </PrivetRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
