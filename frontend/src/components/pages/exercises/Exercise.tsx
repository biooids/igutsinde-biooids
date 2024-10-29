import { useParams } from "react-router-dom";
import { exercisesQuestions } from "../../../assets/questiions/exercisesQuestions";
import { useEffect, useRef, useState } from "react";
import "./exercises.css";

function Exercise() {
  const { exerciseId } = useParams();
  const exerciseData = exercisesQuestions.find(
    (exercise) => exercise.exerciseNumber === Number(exerciseId)
  );

  if (!exerciseData) {
    return (
      <div>Exercise not found for {exerciseId || "no parameter passed"}</div>
    );
  }

  const [data] = useState(exerciseData.data);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lock, setLock] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30);
  const [startQuiz, setStartQuiz] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

  const currentQuestion = data[index];

  useEffect(() => {
    if (!startQuiz || lock) return;

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          revealCorrectAnswer();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [index, lock, startQuiz]);

  const revealCorrectAnswer = () => {
    if (!lock) {
      optionRefs.current[currentQuestion.ans]?.classList.add("correct");
      setLock(true);
    }
  };

  const checkAns = (selectedOption: number) => {
    if (!lock) {
      const isCorrect = currentQuestion.ans === selectedOption;
      optionRefs.current[selectedOption]?.classList.add(
        isCorrect ? "correct" : "wrong"
      );

      if (!isCorrect) {
        optionRefs.current[currentQuestion.ans]?.classList.add("correct");
      }

      setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
      setLock(true);
    }
  };

  const nextQuestion = () => {
    if (lock) {
      if (index < data.length - 1) {
        setIndex(index + 1);
        setTimer(30);
        setShowHint(false);
      } else {
        setShowResult(true);
      }
      resetOptions();
    }
  };

  const resetOptions = () => {
    optionRefs.current.forEach((option) => {
      option?.classList.remove("correct", "wrong");
    });
    setLock(false);
  };

  const resetQuiz = () => {
    setIndex(0);
    setScore(0);
    setShowResult(false);
    setTimer(30);
    setStartQuiz(false);
    setShowHint(false);
    resetOptions();
  };

  const scorePercentage = (score / data.length) * 100;

  const feedbackMessage =
    scorePercentage === 100
      ? "Very smart!"
      : scorePercentage >= 50
      ? "Good!"
      : "You should study.";

  const progressWidth = ((index + 1) / data.length) * 100 + "%";

  return (
    <div className="min-h-screen quiz-container ">
      <h1>Quiz App</h1>

      <section className="flex flex-col gap-3 sm:w-[640px] m-auto bg-white bg-opacity-5 p-5 ">
        {!startQuiz ? (
          <button className="btn" onClick={() => setStartQuiz(true)}>
            Start Quiz
          </button>
        ) : showResult ? (
          <>
            <h2>
              You scored {score} out of {data.length}
            </h2>
            <h3>{feedbackMessage}</h3>
            <button className="btn" onClick={resetQuiz}>
              Reset
            </button>
          </>
        ) : (
          <>
            <div className="progress-bar">
              <div className="progress" style={{ width: progressWidth }}></div>
            </div>
            <h2>
              {index + 1}. {currentQuestion.question}
            </h2>
            <button className="btn" onClick={() => setShowHint(!showHint)}>
              Show Hint
            </button>
            {showHint && <p className="hint">{currentQuestion.hint}</p>}
            <ul>
              {currentQuestion.options.map((option, i) => (
                <li
                  className="bg-blue-950 p-3 rounded-lg cursor-pointer"
                  key={i}
                  ref={(el) => (optionRefs.current[i] = el)}
                  onClick={() => checkAns(i)}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div className="timer">Time left: {timer} seconds</div>
            <button className="btn" onClick={nextQuestion}>
              Next
            </button>
            <div className="index">
              {index + 1} of {data.length} questions
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Exercise;
