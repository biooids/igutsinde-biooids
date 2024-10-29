import { Link } from "react-router-dom";
import exercisesImage from "../../../assets/exercises.jpeg";

type ExamCardProps = {
  examNumber: number;
};
function ExamCard({ examNumber }: ExamCardProps) {
  return (
    <div className="home-card flex flex-col gap-3 w-full sm:w-[300px]  p-3  rounded-lg">
      <div className="w-full">
        <img src={exercisesImage} alt="" className="w-full" />
      </div>
      <p>
        Exam {examNumber},
        {examNumber === 1 ? (
          <span className="text-green-500 font-bold"> Ubuntu</span>
        ) : (
          ""
        )}
      </p>
      <Link to={`/exam/${examNumber}`}>
        <button className="btn w-full">Tangira</button>
      </Link>
    </div>
  );
}

export default ExamCard;
