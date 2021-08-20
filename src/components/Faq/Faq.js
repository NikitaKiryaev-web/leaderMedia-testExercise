import "./Faq.css";
import faq from "../../utils/faq";
import Question from "../Question/Question";

function Faq() {
 return(
  <section className="faq">
  <h2 className="faq__title">Узнайте ответы на часто задаваемые вопросы об аренде</h2>
  {faq.map((item, index) => <Question key={index} question={item.question} answer={item.answer} />)}
</section>
 )
}

export default Faq;