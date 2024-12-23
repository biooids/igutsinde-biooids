import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  actionFailure,
  actionStart,
  actionSuccess,
} from "../../../app/user/userSlice";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function SignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
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
      const res = await fetch("/api/auth/sign-up", {
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
        dispatch(actionFailure("An unknown error occurred"));
      }
    }
  };
  return (
    <div className="min-h-screen flex flex-col sm:flex-row gap-3 p-3 justify-center items-center">
      <div className="max-w-sm flex flex-col gap-3  ">
        <h2 className="text-3xl font-bold text-green-500">Igutsinde</h2>
        <p>
          Urakaza neza kuri igu tsinde, niba nta konti ufite, cyangwa uri
          mushya, uzuza iyi fomu. Niba warafunguje konti, kanda kuri{" "}
          <span className="font-bold text-green-500">Mfite konti</span>,
        </p>
        <Link to="/log-in">
          <button className="btn w-full">Mfite konti</button>
        </Link>
      </div>
      <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-black text-white">
        <form onSubmit={handleSubmit} className="card-body">
          {/* Username Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Username</span>
            </label>
            <input
              id="userName"
              type="text"
              placeholder="Enter Username"
              className="input input-bordered text-black placeholder-gray-500"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          {/* Phone Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Phone</span>
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter phone"
              className="input input-bordered text-black placeholder-gray-500"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="input input-bordered text-black placeholder-gray-500"
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <div className="mt-3 cursor-pointer">
              {showPassword ? (
                <FaRegEye onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-3">
            <button
              type="submit"
              className="btn w-full bg-green-500 text-white hover:bg-green-600"
            >
              {loading ? "Loading..." : "Injira"}
            </button>
          </div>
        </form>

        {/* Error Alert */}
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
            <span>
              {(error as string).includes("duplicate key")
                ? "Phone exists, log in"
                : error}
            </span>
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

export default SignUp;
