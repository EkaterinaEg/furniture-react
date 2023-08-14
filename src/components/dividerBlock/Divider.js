import dividerLine from "../../assets/img/Line.png";
import styles from "../dividerBlock/divider.module.scss";

const Divider = (props) => {
  return (
    <div className="block-divider d-flex align-items-center mb-5">
      <h5 className={styles.divider__name}>{props.title.name}</h5>
      <img
        className={`${styles.divider__line} d-none d-xl-block`}
        src={dividerLine}
        alt="horizontal line"
      />
    </div>
  );
};

export default Divider;
