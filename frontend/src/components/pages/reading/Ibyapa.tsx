import ibyapaQuestion from "../../../assets/ibyapa.pdf";

function Ibyapa() {
  return (
    <section className="min-h-screen">
      {" "}
      <div className="h-screen w-full">
        <iframe src={ibyapaQuestion} className="h-full w-full border-0">
          Ibyapa
        </iframe>
      </div>
    </section>
  );
}
export default Ibyapa;
