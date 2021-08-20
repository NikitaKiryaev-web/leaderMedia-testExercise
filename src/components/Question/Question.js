import "./Question.css";
import {useState} from "react";

function Question({question, answer}) {
  const [isShowing, setIsShowing] = useState(false);

  function onToggleAnswer() {
    setIsShowing(!isShowing);
  }

  return(
    <div className="question">
      <div className="question__wrapper">
      <p className="question__title">{question}</p>
      <p className={`question__answer ${!isShowing && "question__answer_hide"}`}>{answer}</p>
      </div>
      <button className={`${isShowing ? "question__hide-answer" : "question__show-answer"}`} type="button" onClick={onToggleAnswer}></button> 
    </div>
  )
}

export default Question;