import promo from "./promo.module.scss";

const Promo = (props) => {
  return (
    <div
      className={`${promo.promoInfo} ${props.position} d-flex flex-column justify-content-center align-items-center`}
    >
      <div className="promo-info__projects projects text-center align-middle">
        <span className={`${promo.numbers} projects__numbers`}>350+</span>
        <p className="projects__description description">Project Completed</p>
      </div>
      <div className="promo-info__teams teams text-center align-middle">
        <span className={`${promo.numbers} teams__numbers`}>23+</span>
        <p className="teams__description description">Professional Teams</p>
      </div>
      <div className="promo-info__experience experience text-center align-middle">
        <span className={`${promo.numbers} experience__numbers`}>15+</span>
        <p className={`${promo.description} experience__description`}>
          Years Experience
        </p>
      </div>
    </div>
  );
};

export default Promo;
