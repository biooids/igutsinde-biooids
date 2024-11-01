import { Link, NavLink } from "react-router-dom";
import igutsindeLogo from "../../assets/igutsindelogo.png";

import { FaSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../app/theme/themeSlice";
import { AppDispatch, RootState } from "../../app/store";

function HeaderComp() {
  const dispatch = useDispatch<AppDispatch>();
  const { theme } = useSelector((state: RootState) => state.theme);
  const { currentUser } = useSelector((state: RootState) => state.user);
  return (
    <header className="flex justify-between items-center p-3">
      <div className="h-14 w-14">
        <img
          src={igutsindeLogo}
          alt=""
          className="h-full w-full rounded-full"
        />
      </div>

      <nav className="hidden sm:block">
        <ul className="flex gap-3">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : ""
              }
              to=".."
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : ""
              }
              to="about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : ""
              }
              to="contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : ""
              }
              to="pricing"
            >
              Pricing
            </NavLink>
          </li>
        </ul>
      </nav>
      {currentUser ? (
        currentUser.user.userName
      ) : (
        <Link to="/log-in">
          <button className="btn">Log in</button>
        </Link>
      )}

      <span
        onClick={() => {
          dispatch(toggleTheme());
        }}
        className="hover:cursor-pointer"
      >
        {theme === "light" ? <FaSun /> : <FaRegMoon />}
      </span>

      <div className=" drawer-end sm:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button">
            <RxHamburgerMenu className="text-3xl" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <NavLink
                to="/"
                onClick={() =>
                  ((
                    document.getElementById("my-drawer-4") as HTMLInputElement
                  ).checked = false)
                }
                className={({ isActive }) => (isActive ? "bg-gray-700" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "bg-gray-700" : "")}
                to="about"
                onClick={() =>
                  ((
                    document.getElementById("my-drawer-4") as HTMLInputElement
                  ).checked = false)
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "bg-gray-700" : "")}
                to="contact"
                onClick={() =>
                  ((
                    document.getElementById("my-drawer-4") as HTMLInputElement
                  ).checked = false)
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "bg-gray-700" : "")}
                to="pricing"
                onClick={() =>
                  ((
                    document.getElementById("my-drawer-4") as HTMLInputElement
                  ).checked = false)
                }
              >
                pricing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default HeaderComp;
