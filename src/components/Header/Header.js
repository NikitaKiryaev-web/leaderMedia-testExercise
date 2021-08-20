import "./Header.css";
import cards from "../../utils/cards";
import Card from "../Card/Card";

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">Аренда у нас — это просто!</h1>
      <div className="header__cards">
        {cards.map((card, index) => <Card image={card.image} title={card.title} description={card.description} key={index} /> 
        )}
      </div>
    </header>
  )
}

export default Header;