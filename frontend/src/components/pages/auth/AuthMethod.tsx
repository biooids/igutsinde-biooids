import { Link } from "react-router-dom";

function AuthMethod() {
  return (
    <section className="min-h-screen flex flex-col gap-3 p-3 m-auto pt-10 max-w-sm">
      <h2 className="text-3xl font-bold text-green-500">Igutsinde 📗 🖊</h2>

      <p>
        Urakaza neza kuri igutsinde, niba nta konti ufite, cyangwa urimushya
        kandi kuri{" "}
        <span className="font-bold text-green-500">Funguza konti</span>. Niba
        warafunguje konti, kanda kuri{" "}
        <span className="font-bold text-green-500">Mfite konti</span>.
      </p>
      <div className=" justify-between grid grid-cols-2 gap-3 ">
        <Link to="/log-in">
          <button className="btn w-full">Mfite konti</button>
        </Link>
        <Link to="/sign-up">
          <button className="btn w-full">Funguza konti</button>
        </Link>
      </div>
    </section>
  );
}
export default AuthMethod;
