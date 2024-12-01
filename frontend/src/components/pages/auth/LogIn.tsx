import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  actionStart,
  actionSuccess,
  actionFailure,
} from "../../../app/user/userSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AppDispatch, RootState } from "../../../app/store";

function LogIn() {
  const { error, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(actionStart());
      const res = await fetch("/api/auth/log-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!data.success) {
        dispatch(actionFailure(data.message));
      } else {
        dispatch(actionSuccess(data));
        navigate("/");
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
    <div className="min-h-screen flex flex-col sm:flex-row gap-3 p-3 justify-center items-center">
      <div className="max-w-sm flex flex-col gap-3  ">
        <h2 className="text-3xl font-bold text-green-500">Igutsinde</h2>
        <p>
          Urakaza neza kuri igu tsinde, Niba warafunguje konti, uzuza ino fomu.
          Niba nta konti ufite, cyangwa uri mushya, kanda kuri{" "}
          <span className="font-bold text-green-500">Funguza konti</span>
        </p>
        <Link to="/sign-up">
          <button className="btn w-full">Funguza konti.</button>
        </Link>
      </div>
      <div className="card  w-full max-w-sm shrink-0 shadow-2xl bg-black">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter phone"
              className="input input-bordered"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="input input-bordered"
              onChange={handleChange}
              required
            />
            <div className="mt-3 cursor-pointer">
              {showPassword ? (
                <FaRegEye onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} />
              )}
            </div>
          </div>

          <div className="mt-3">
            <button type="submit" className="btn w-full">
              {loading ? "Loading..." : "Injira"}
            </button>
          </div>
        </form>
        {error && (
          <div className="alert alert-error mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span>{error}</span>
            <button
              type="button"
              className="btn btn-sm ml-2"
              onClick={() => dispatch(actionFailure(null))}
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LogIn;
