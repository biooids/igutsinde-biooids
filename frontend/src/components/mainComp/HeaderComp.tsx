import { Link } from "react-router-dom";

function HeaderComp() {
  return (
    <header>
      <div>
        <img src="" alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="..">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComp;
