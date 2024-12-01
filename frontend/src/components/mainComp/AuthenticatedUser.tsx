import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Navigate, Outlet } from "react-router-dom";

function AuthenticatedUser() {
  const { currentUser } = useSelector((state: RootState) => state.user);

  return currentUser ? <Outlet /> : <Navigate to="/auth-method" />;
}

export default AuthenticatedUser;
