import { useState } from "react";
import { examQuestions } from "../../../assets/questions/examQuestions";
import ExamCard from "./ExamCard";

function ExamPage() {
  const [exams] = useState([...examQuestions]);

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
        {exams.map((exam) => (
          <ExamCard key={exam.examNumber} examNumber={exam.examNumber} />
        ))}
      </div>
    </section>
  );
}

export default ExamPage;
