import exercises from "../../../assets/exercises.jpeg";
function ExercisesPage() {
  return (
    <section className="min-h-screen flex flex-col gap-3 p-3">
      <h3 className="text-2xl font-bold text-green-500">
        Ishyura 1500 Kuri code 568803
      </h3>
      <p>
        Ishyura 1500 Kugirango ubone izindi exam Iri mu amazina ya Eric
        DUSENGIMANA Numara kwishyura hamagara nomero 0784787860 wishyuyeho
        umubwire aguhe uburenganzira bwo kwiga Exam zose
      </p>
      <div className="flex flex-wrap gap-5">
        <div className="home-card flex flex-col gap-3 w-full sm:w-[300px]  p-3  rounded-lg">
          <div className="w-full">
            <img src={exercises} alt="" className="w-full" />
          </div>
          <p>
            Umwitozo 1, <span className="text-green-500 font-bold">Ubuntu</span>
          </p>
        </div>
        <div className="home-card flex flex-col gap-3 w-full sm:w-[300px]  p-3  rounded-lg">
          <div className="w-full">
            <img src={exercises} alt="" className="w-full" />
          </div>
          <p>Umwitozo 2 </p>
        </div>
      </div>
    </section>
  );
}

export default ExercisesPage;
