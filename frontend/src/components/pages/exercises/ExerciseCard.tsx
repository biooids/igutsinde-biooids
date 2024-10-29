import { Link } from "react-router-dom";
import exercises from "../../../assets/exercises.jpeg";

type ExerciseCardProps = {
  exerciseNumber: number;
};

// Define the functional component using the function keyword
function ExerciseCard({ exerciseNumber }: ExerciseCardProps) {
  return (
    <div className="home-card flex flex-col gap-3 w-full sm:w-[300px] p-3 rounded-lg">
      <div className="w-full">
        <img src={exercises} alt="Exercise image" className="w-full" />
      </div>
      <p>
        Umwitozo {exerciseNumber},
        {exerciseNumber === 1 ? (
          <span className="text-green-500 font-bold">Ubuntu</span>
        ) : (
          ""
        )}
      </p>
      <Link to={`/exercise/${exerciseNumber}`}>
        <button className="btn w-full">Tangira</button>
      </Link>
    </div>
  );
}

export default ExerciseCard;
