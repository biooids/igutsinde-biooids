import { Link } from "react-router-dom";
import "./home.css";
import ibyapa from "../../../assets/ibyapa.jpeg";
import irembo from "../../../assets/irembo.jpeg";
import igazeti from "../../../assets/igazeti.jpg";

function HomePage() {
  return (
    <section className="min-h-screen flex flex-col gap-3">
      <div className="p-3 flex flex-col gap-3">
        <h1 className="text-3xl font-bold">
          Urakaza neza kuri
          <span className="font-bold text-green-500"> Igutsinde </span>
        </h1>
        <p>
          kuri <span className="font-bold text-green-500">igutsinde</span>{" "}
          tubafasha kwimenyerereza gukora ibizamini bitangwa na polisi kuri
          mudasobwa ukora ikizami ubona nibisubizo icyarimwe ukeneeye ubundi
          busobanuro watwandikira kuri whatsapp cyangwa ukaduhamagara kuri{" "}
          <span className="font-bold text-green-500"> 0787832480 </span>
          cyangwa <span className="font-bold text-green-500"> 0790931024.</span>
        </p>
      </div>
      <div className="home-page flex flex-col sm:grid gap-3 p-3">
        <div className="home-card flex justify-between flex-col gap-3 rounded-lg">
          <h2 className="text-2xl font-bold text-green-500">Imyitozo </h2>
          <p>
            Imyitozo uyikora ukanze kuri "kora Imyitozo" aho uhitamo umwitozo 1,
            2 &#x221D; 3, bitewe naho wagejeje wimenyereza. Buri kibazo ugikora
            mumasegonda 60 sec, iyo arangiye utarahitamo kirasubizwa mwibara{" "}
            <span className="bg-green-500 h-3 w-3 inline-block"></span>.
            Utsinzwe nikibazo birangwa nibara{" "}
            <span className="bg-red-500 h-3 w-3 inline-block"></span> ndetse
            nibara <span className="bg-green-500 h-3 w-3 inline-block"></span>{" "}
            rikosora ikibazo, wasoza ibibazo 20 ukanda kuri submit ukabona
            amanota.
          </p>
          <Link to="exercises">
            <button className="btn w-full">Kora Imyitozo</button>
          </Link>
        </div>
        <div className="home-card flex justify-between flex-col gap-3 rounded-lg">
          <h2 className="text-2xl font-bold text-green-500">Ikizami </h2>
          <p>
            Ikizami ugikora ukanze kuri "kora Ikizami" aho uhitamo Ikizami 1, 2
            &#x221D; 3, bitewe naho wagejeje wimenyereza. Buri kizami kikorwa 20
            min, iyo arangiye utaragisoza uhita werekwa amanota wagize kuri 20.
            Utsinzwe n'Ikizami birangwa nijambo.
            <span className="text-red-500"> Failed</span> watsinda bikarangwa
            nijambo
            <span className="text-green-500"> Pass</span> noneho ugahita werekwa
            nuko byari gusubizwa 1-20
          </p>
          <Link to="exams">
            <button className="btn w-full">Kora Ikizami</button>
          </Link>
        </div>
        <div className="home-card flex flex-col gap-3 rounded-lg">
          <h2 className="text-2xl font-bold text-green-500">Inkoranya </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="ibyapa">
              <div className="bg-black p-1 rounded-lg ">
                <div className="h-[80px] w-[80px]">
                  <img src={ibyapa} alt="" className="h-full w-full " />
                </div>
                <p className="text-center">Ibyapa</p>
              </div>
            </Link>

            <a
              href="https://irembo.gov.rw/"
              target="_blank"
              className="text-center"
            >
              <div className="bg-black p-1 rounded-lg">
                <div className="h-[80px] w-[80px]">
                  <img
                    src={irembo}
                    alt=""
                    className="h-full w-full p-1 rounded-lg"
                  />
                </div>
                <p className="text-center">Irembo</p>
              </div>
            </a>
            <div className="bg-black p-1 rounded-lg">
              <div className="h-[80px] w-[80px]">
                <img src={igazeti} alt="" className="h-full w-full " />
              </div>
              <p className="text-center">Igazeti</p>
              <p className="text-red-500">ntago iraza</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
