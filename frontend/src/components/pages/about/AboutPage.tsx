import "./about.css";
import myPic from "../../../assets/myPic.jpg";
function AboutPage() {
  return (
    <section className="min-h-screen p-3  flex flex-col gap-3">
      <h2 className="text-3xl font-bold">Welcome, dear valued visitor!</h2>
      <p className="text-lg font-bold">
        Discover more about who we are and what we stand for.
      </p>
      <p>
        Feel free to{" "}
        <span className="text-green-500 font-bold"> reach out to us </span> if
        you have any{" "}
        <span className="text-green-500 font-bold"> questions </span>
        or <span className="text-green-500 font-bold"> technical issues </span>.
        We also{" "}
        <span className="text-green-500 font-bold"> accept proposals </span> and
        <span className="text-green-500 font-bold"> collaborations </span>.
      </p>

      <div className="flex gap-3 flex-wrap">
        <div className="about-shadowed-card flex flex-col gap-3 w-[300px] p-3 rounded-lg">
          <div className="w-full h-[300px]">
            <img
              src={myPic}
              alt=" my-pic"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <p>
              Name: <span className="text-green-500">Hwapyong M. Edouard</span>
            </p>
            <p>
              Role: <span className="text-green-500">Software Engineer</span>
            </p>
            <p>
              Whatsapp: <span className="text-green-500">0790931024</span>
            </p>
            <p>
              Email:{" "}
              <span className="text-green-500">ehwapyongm@gmail.com</span>
            </p>
            <p>
              My website:{" "}
              <a
                href="https://www.biooids.com/articles"
                target="_blank"
                className="underline text-green-500"
              >
                biooids.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
