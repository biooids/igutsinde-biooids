import { Link, useParams } from "react-router-dom";
import { exercisesQuestions } from "../../../assets/questions/exercisesQuestions";
import { useEffect, useRef, useState } from "react";
import "./exercises.css";
import { PiSirenFill } from "react-icons/pi";

function Exercise() {
  const { exerciseId } = useParams();
  const [userPaid, setUserPaid] = useState(true);
  const [error, setError] = useState(null);

  const checkingUserCookie = async () => {
    try {
      const res = await fetch("/api/payment/cheCkingUserPaidCookie");
      const data = await res.json();

      if (!data.success && Number(exerciseId) !== 1) {
        setUserPaid(false);
        setError(data.message);
        return;
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    checkingUserCookie();
  }, []);

  if (!exerciseId) {
    return <div>Error: Exercise ID is required</div>;
  }

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
  const [timer, setTimer] = useState(60);
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
      ? "Very smart!"
      : scorePercentage >= 50
      ? "Good!"
      : "You should study.";

  const progressWidth = ((index + 1) / data.length) * 100 + "%";

  return (
    <section className="min-h-screen quiz-container ">
      {!userPaid ? (
        <section className="quiz-shadowed-card p-3  rounded-lg flex flex-col gap-3 m-auto max-w-[300px] mt-5 ">
          <h2 className="text-red-500 text-2xl font-bold flex gap-3  items-center">
            <PiSirenFill className="animate-pulse" />
            Alert! Critical error :
          </h2>
          <p className="text-red-500">{error}</p>
          <p>
            The Data we have about you indicate that you haven't paid. You need
            to pay to access this quiz. Please{" "}
            <span>
              <Link
                to="/contact"
                className="text-green-500 underline font-bold"
              >
                Contact
              </Link>
            </span>{" "}
            us if you know that you paid.
          </p>
          <Link to="/pricing">
            <button className="btn w-full">Pay</button>
          </Link>
        </section>
      ) : (
        <section className="quiz-shadowed-card flex flex-col gap-3 sm:w-[640px] m-auto p-5 mt-5 rounded-lg">
          {!startQuiz ? (
            <div className="flex flex-col gap-3 w-full">
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
                kora Imyitozo
              </button>
            </div>
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
                <div
                  className="progress"
                  style={{ width: progressWidth }}
                ></div>
              </div>
              <h2>
                {index + 1}. {currentQuestion.question}
              </h2>
              <button className="btn" onClick={() => setShowHint(!showHint)}>
                Show Hint
              </button>
              {showHint && <p className="hint">{currentQuestion.hint}</p>}
              <ul className="text-white">
                {currentQuestion.options.map((option, i) => (
                  <li
                    className="bg-black bg-opacity-50 p-3 rounded-lg cursor-pointer"
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
      )}
    </section>
  );
}

export default Exercise;
