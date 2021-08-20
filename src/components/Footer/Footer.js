import "./Footer.css";

function Footer(props) {
  return(
    <footer className="footer">
      <h2 className="footer__title">Кислородные коктейли - помогают или нет?</h2>
      <iframe
        className="footer__video"
        src="https://www.youtube.com/embed/X98afxZLPpE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen> 
        </iframe>
    </footer>
  )
}

export default Footer;