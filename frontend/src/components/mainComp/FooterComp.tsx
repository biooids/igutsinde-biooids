import { Link } from "react-router-dom";

function FooterComp() {
  return (
    <footer className="footer footer-center text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/pricing" className="link link-hover">
          Pricing
        </Link>
      </nav>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <a
            href="https://biooids.com"
            target="_blank"
            className="text-green-500 underline"
          >
            biooids
          </a>
        </p>
      </aside>
    </footer>
  );
}

export default FooterComp;
