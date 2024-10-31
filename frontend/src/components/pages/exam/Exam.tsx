import { useParams } from "react-router-dom";
import { examQuestions } from "../../../assets/questions/examQuestions";
import { useEffect, useRef, useState } from "react";
import "./exam.css";

function Exam() {
  const { examId } = useParams();
  const examData = examQuestions.find(
    (exam) => exam.examNumber === Number(examId)
  );

  if (!examData) {
    return <div>Exercise not found for {examId || "no parameter passed"}</div>;
  }

  const [data] = useState(examData.data);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(data.length).fill(null)
  );
  const [startQuiz, setStartQuiz] = useState(false);
  const [timer, setTimer] = useState(data.length * 60);
  const [lock, setLock] = useState(false); // Lock state for preventing selection

  // Define optionRefs with the correct type
  const optionRefs = useRef<(HTMLLIElement | null)[][]>([]);

  useEffect(() => {
    if (startQuiz && timer > 0 && !showResult) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      handleSubmit();
    }
  }, [timer, startQuiz, showResult]);

  const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
    if (lock) return; // Prevent selection if locked
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let finalScore = 0;
    data.forEach((question, i) => {
      if (selectedAnswers[i] === question.ans) {
        finalScore += 1;
        optionRefs.current[i][selectedAnswers[i]]?.classList.add("correct");
      } else if (selectedAnswers[i] !== null) {
        optionRefs.current[i][selectedAnswers[i]]?.classList.add("wrong");
        optionRefs.current[i][question.ans]?.classList.add("correct");
      } else {
        optionRefs.current[i][question.ans]?.classList.add("correct");
      }
    });
    setScore(finalScore);
    setShowResult(true);
    setLock(true); // Lock after submitting
  };

  const handleReset = () => {
    setScore(0);
    setShowResult(false);
    setSelectedAnswers(Array(data.length).fill(null));
    setTimer(data.length * 30);
    setStartQuiz(false);
    setLock(false); // Unlock for reset
    optionRefs.current.forEach((question) =>
      question.forEach((option) => option?.classList.remove("correct", "wrong"))
    );
  };

  const scorePercentage = (score / data.length) * 100;

  const feedbackMessage =
    scorePercentage === 100
      ? "Very smart!"
      : scorePercentage >= 50
      ? "Good!"
      : "You should study.";

  return (
    <div className="exam-container min-h-screen">
      <h1>Exam {examId}</h1>

      <section className="flex flex-col gap-3 sm:w-[640px] m-auto  bg-white bg-opacity-5 p-5 rounded-lg">
        {!startQuiz ? (
          <button className="btn" onClick={() => setStartQuiz(true)}>
            Start Exam
          </button>
        ) : (
          <>
            {showResult && (
              <div className="result-section">
                <h2>
                  You scored {score} out of {data.length}
                </h2>
                <h3>{feedbackMessage}</h3>
              </div>
            )}
            <div className="timer">Time left: {timer} seconds</div>
            {data.map((question, questionIndex) => (
              <div key={questionIndex} className="flex flex-col gap-3">
                <h2>
                  {questionIndex + 1}. {question.question}
                </h2>
                <ul className="flex flex-col gap-1">
                  {question.options.map((option, optionIndex) => (
                    <li
                      key={optionIndex}
                      ref={(el) => {
                        if (!optionRefs.current[questionIndex]) {
                          optionRefs.current[questionIndex] = [];
                        }
                        optionRefs.current[questionIndex][optionIndex] = el;
                      }}
                      className={`
                        rounded-lg
                        ${
                          selectedAnswers[questionIndex] === optionIndex
                            ? "selected"
                            : ""
                        }
                      `}
                      onClick={() =>
                        handleSelectAnswer(questionIndex, optionIndex)
                      }
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button
              className="btn"
              onClick={showResult ? handleReset : handleSubmit}
            >
              {showResult ? "Reset Quiz" : "Submit"}
            </button>
          </>
        )}
      </section>
    </div>
  );
}

export default Exam;
