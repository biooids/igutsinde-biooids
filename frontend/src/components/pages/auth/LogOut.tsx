import { useDispatch, useSelector } from "react-redux";
import {
  actionStart,
  actionSuccess,
  actionFailure,
} from "../../../app/user/userSlice";
import { RootState } from "../../../app/store";

function LogOut() {
  const { error, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      actionStart();
      const res = await fetch("/api/auth/log-out", {
        method: "POST",
      });
      const data = await res.json();
      if (!data.success) {
        dispatch(actionFailure(data.message));
      } else {
        console.log(data);
        dispatch(actionSuccess(""));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(actionFailure(error.message));
      } else {
        dispatch(actionFailure("An unknown error occurred."));
      }
    }
  };
  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <span
          onClick={handleLogout}
          className="hover:text-green-500 cursor-pointer"
        >
          Log Out
        </span>
      )}
      <span>{error}</span>
    </div>
  );
}
export default LogOut;
