import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Navigate, Outlet } from "react-router-dom";

function AdminOnly() {
  const { currentUser } = useSelector((state: RootState) => state.user);

  return currentUser?.user.isAdmin ? <Outlet /> : <Navigate to="/" />;
}
export default AdminOnly;
