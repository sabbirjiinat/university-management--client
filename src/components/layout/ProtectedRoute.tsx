import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAppSelector((state) => state.auth);
  if (!token) {
   return <Navigate to="/login" replace ></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
