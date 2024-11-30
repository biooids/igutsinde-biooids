import { Link } from "react-router-dom";
import exercises from "../../../assets/exercises.jpeg";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

type ExerciseCardProps = {
  exerciseNumber: number;
};

// Define the functional component using the function keyword
function ExerciseCard({ exerciseNumber }: ExerciseCardProps) {
  const { currentUser } = useSelector((state: RootState) => state.user);

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

      {(currentUser && currentUser.user.paid) || exerciseNumber === 1 ? (
        <Link to={`/exercise/${exerciseNumber}`}>
          <button className="btn w-full">Kora uyu mwitozo</button>
        </Link>
      ) : (
        <Link to="/pricing">
          <button className="btn w-full">Kora uyu mwitozo</button>
        </Link>
      )}
    </div>
  );
}

export default ExerciseCard;
