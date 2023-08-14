import ellipse from "../../assets/img/Ellipse.png";
import styles from "./card.module.scss";

const Card = (props) => {
  return (
    <div className="card text-center p-4 gap-4">
      <img
        className={`${styles.card__img} mx-auto`}
        src={ellipse}
        alt="icon of grey ellipse"
      />
      <div className="card-body">
        <h3 className={`${styles.card__title} card-title mb-4`}>
          {props.title.name}
        </h3>
        <h4 className={`${styles.card__text} card-text`}>
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </h4>
      </div>
    </div>
  );
};

export default Card;
