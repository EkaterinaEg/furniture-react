import quoteWindowBlock from "../quoteWindowBlock/quoteWindow.module.scss";
import Ceo from "../../assets/img/CEO_photo.jpg";

const QuoteWindowModal = () => {
  return (
    <figure
      className={`description__quote-window d-flex justify-content-center`}
    >
      <img
        className={`${quoteWindowBlock.quoteWindow__image} d-md-block d-none me-3`}
        src={Ceo}
        alt="CEO"
      />
      <figcaption className={quoteWindowBlock.quoteWindow__author}>
        <span className={quoteWindowBlock.author__name}>Arga Danaan</span>
        <br></br>CEO of Dananz
      </figcaption>
    </figure>
  );
};

export default QuoteWindowModal;
