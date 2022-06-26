import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivetRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest}> {(props) => <Element {...props} />} </Route>
  ) : (
    <Navigate to="/login" />
  );
}
