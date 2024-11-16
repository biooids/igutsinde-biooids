import ExerciseCard from "./ExerciseCard";
import { exercisesQuestions } from "../../../assets/questions/exercisesQuestions";
import { useState } from "react";
function ExercisesPage() {
  const [exercises] = useState([...exercisesQuestions]);

  return (
    <section className="min-h-screen flex flex-col gap-3 p-3">
      <h3 className="text-2xl font-bold text-green-500">
        Hano urakora imyitozo igufasha kwimenyerereza
      </h3>
      <div className="flex flex-wrap gap-5">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.exerciseNumber}
            exerciseNumber={exercise.exerciseNumber}
          />
        ))}
      </div>
    </section>
  );
}

export default ExercisesPage;
