import { Link } from "react-router-dom";
import exercisesImage from "../../../assets/exercises.jpeg";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

type ExamCardProps = {
  examNumber: number;
};
function ExamCard({ examNumber }: ExamCardProps) {
  const { currentUser } = useSelector((state: RootState) => state.user);

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
      {(currentUser && currentUser.user.paid) || examNumber === 1 ? (
        <Link to={`/exam/${examNumber}`}>
          <button className="btn w-full">Kora iki kizamini</button>
        </Link>
      ) : (
        <Link to="/pricing">
          <button className="btn w-full">Kora iki kizamini</button>
        </Link>
      )}
    </div>
  );
}

export default ExamCard;
