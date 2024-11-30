import { Link, useParams } from "react-router-dom";
import { exercisesQuestions } from "../../../assets/questions/exercisesQuestions";
import { useCallback, useEffect, useRef, useState } from "react";
import "./exercises.css";
import { PiSirenFill } from "react-icons/pi";

type Question = {
  question: string;
  options: string[];
  ans: number;
  hint?: string;
};

function Exercise() {
  const { exerciseId } = useParams();

  // Hooks must be declared at the top level
  const [userPaid, setUserPaid] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lock, setLock] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(60);
  const [startQuiz, setStartQuiz] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Check for exercise data early
  const exerciseData = exercisesQuestions.find(
    (exercise) => exercise.exerciseNumber === Number(exerciseId)
  );

  const checkingUserCookie = useCallback(async () => {
    try {
      const res = await fetch("/api/payment/cheCkingUserPaidCookie");
      const data = await res.json();

      if (!data.success && Number(exerciseId) !== 1) {
        setUserPaid(false);
        setError(data.message);
      }
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    }
  }, [exerciseId]);

  useEffect(() => {
    checkingUserCookie();
  }, [checkingUserCookie]);

  useEffect(() => {
    if (exerciseData) {
      setData(exerciseData.data);
    }
  }, [exerciseData]);

  const revealCorrectAnswer = useCallback(() => {
    if (!lock) {
      const question = data[index]; // Dynamically derive the current question
      optionRefs.current[question.ans]?.classList.add("correct");
      setLock(true);
    }
  }, [lock, index, data]);

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
  }, [index, lock, startQuiz, revealCorrectAnswer]);

  const checkAns = (selectedOption: number) => {
    if (!lock) {
      const isCorrect = data[index].ans === selectedOption;
      optionRefs.current[selectedOption]?.classList.add(
        isCorrect ? "correct" : "wrong"
      );

      if (!isCorrect) {
        optionRefs.current[data[index].ans]?.classList.add("correct");
      }

      setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
      setLock(true);
    }
  };

  const nextQuestion = () => {
    if (lock) {
      if (index < data.length - 1) {
        setIndex(index + 1);
        setTimer(60);
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
    setTimer(60);
    setStartQuiz(false);
    setShowHint(false);
    resetOptions();
  };

  const scorePercentage = (score / data.length) * 100;

  const feedbackMessage =
    scorePercentage === 100
      ? "Passed and Proficient!"
      : scorePercentage >= 60
      ? "Passed!"
      : "Failed!. Watsinzwe komeza ukore imyitozo unasome igazeti n'ibyapa";

  const progressWidth = ((index + 1) / data.length) * 100 + "%";

  // Handle conditional rendering
  if (!exerciseId) {
    return <div>Error: Exercise ID is required</div>;
  }

  if (!exerciseData) {
    return (
      <div>Exercise not found for {exerciseId || "no parameter passed"}</div>
    );
  }

  return (
    <section className="min-h-screen quiz-container">
      {!userPaid ? (
        <section className="quiz-shadowed-card p-3 rounded-lg flex flex-col gap-3 m-auto max-w-[300px] mt-5">
          <h2 className="text-red-500 text-2xl font-bold flex gap-3 items-center">
            <PiSirenFill className="animate-pulse" />
            Alert! Critical error:
          </h2>
          <p className="text-red-500">{error}</p>
          <p>
            You haven’t paid. Please{" "}
            <Link to="/contact" className="text-green-500 underline font-bold">
              Contact
            </Link>{" "}
            us or{" "}
            <Link to="/pricing" className="text-green-500 underline font-bold">
              Pay
            </Link>{" "}
            to access this quiz.
          </p>
        </section>
      ) : (
        <section className="quiz-shadowed-card flex flex-col gap-3 sm:w-[640px] m-auto p-5 mt-5 rounded-lg">
          {!startQuiz ? (
            <>
              <p>
                Imyitozo uyikora ukanze kuri "kora Imyitozo" aho uhitamo
                umwitozo 1, 2 &#x221D; 3, bitewe naho wagejeje wimenyereza. Buri
                kibazo ugikora mumasegonda 60 sec, iyo arangiye utarahitamo
                kirasubizwa mwibara{" "}
                <span className="bg-green-500 h-3 w-3 inline-block"></span>.
                Utsinzwe nikibazo birangwa nibara{" "}
                <span className="bg-red-500 h-3 w-3 inline-block"></span> ndetse
                nibara{" "}
                <span className="bg-green-500 h-3 w-3 inline-block"></span>{" "}
                rikosora ikibazo, wasoza ibibazo 20 ukanda kuri submit ukabona
                amanota.
              </p>
              <button className="btn" onClick={() => setStartQuiz(true)}>
                Tangira uyu umwitozo
              </button>
            </>
          ) : showResult ? (
            <>
              <h2 className="text-2xl font-bold">
                Wabonye {score}/{data.length}
              </h2>
              <h3>{feedbackMessage}</h3>
              <button className="btn" onClick={resetQuiz}>
                Reset
              </button>
            </>
          ) : (
            <>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: progressWidth }}
                ></div>
              </div>
              <h2>
                {index + 1}. {data[index].question}
              </h2>
              <button className="btn" onClick={() => setShowHint(!showHint)}>
                Show Hint
              </button>
              {showHint && <p className="hint">{data[index].hint}</p>}
              <ul className="text-white">
                {data[index].options.map((option, i) => (
                  <li
                    key={i}
                    ref={(el) => (optionRefs.current[i] = el)}
                    className="bg-black bg-opacity-50 p-3 rounded-lg cursor-pointer"
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
      )}
    </section>
  );
}

export default Exercise;
