import { Link } from "react-router-dom";
import igutsindeLogo from "../../assets/igutsindelogo.png";

function HeaderComp() {
  return (
    <header className="flex  justify-between items-center p-3 ">
      <div className="h-14 w-14">
        <img
          src={igutsindeLogo}
          alt=""
          className="h-full w-full rounded-full"
        />
      </div>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to="..">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="help">Help</Link>
          </li>
        </ul>
      </nav>
      <button className="btn">Log in </button>
    </header>
  );
}

export default HeaderComp;
