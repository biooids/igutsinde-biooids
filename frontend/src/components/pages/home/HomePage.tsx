import "./home.css";

function HomePage() {
  return (
    <section className="min-h-screen flex flex-col gap-3">
      <div className="p-3 flex flex-col gap-3">
        <h1 className="text-3xl font-bold">
          Urakaza neza kuri
          <span className="font-bold text-green-500"> Igutsinde </span>.
        </h1>
        <p>
          Kuri <span className="font-bold text-green-500">IGUTSINDE</span>{" "}
          TUBAFASHA KWIMENYEREZA GUKORA IBIZAMINI BITANGWA NA POLISI KURI
          MUDASOBYA UKORA IKIZAMI UBONA NIBISUBIZO ICYARIMWE UKENEYE UBUNDI
          BUSOBANURO WATWANDIKIRA KURI WHATSAPP CYANGWA UKADUHAMAGARA KURI{" "}
          <span className="font-bold text-green-500"> 0787832480 </span>
          CYANGWA <span className="font-bold text-green-500"> 0790931024</span>
        </p>
      </div>
      <div className="home-page  grid gap-3 p-3">
        <div className="home-card flex justify-between flex-col gap-3 rounded-lg">
          <h2 className="text-2xl font-bold text-green-500">IMYITOZO </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            aliquid ipsam porro doloremque quaerat voluptatum nobis expedita,
            obcaecati magnam molestias incidunt quidem aperiam quas, numquam
            culpa. Ducimus nisi ab dolorum.
          </p>
          <button className="btn">Kora Imyitozo</button>
        </div>
        <div className="home-card flex justify-between flex-col gap-3 rounded-lg">
          <h2 className="text-2xl font-bold text-green-500">IKIZAMI </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            aliquid ipsam porro doloremque quaerat voluptatum nobis expedita,
            obcaecati magnam molestias incidunt quidem aperiam quas, numquam
            culpa. Ducimus nisi ab dolorum.
          </p>
          <button className="btn">Kora ikizami</button>
        </div>
        <div className="home-card flex justify-between flex-col gap-3 rounded-lg">
          <h2 className="text-2xl font-bold text-green-500"> </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            aliquid ipsam porro doloremque quaerat voluptatum nobis expedita,
            obcaecati magnam molestias incidunt quidem aperiam quas, numquam
            culpa. Ducimus nisi ab dolorum.
          </p>
          <button className="btn"></button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
