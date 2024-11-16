import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.jpg";
function PageNotFound() {
  return (
    <section className="min-h-screen flex justify-center items-center flex-col gap-3">
      <h2 className="text-3xl font-bold ">404 error: Page Not Found</h2>
      <Link to="/">
        <button className="btn">Go Home</button>
      </Link>
      <img src={notFound} alt="404 Not Found" />
    </section>
  );
}

export default PageNotFound;
