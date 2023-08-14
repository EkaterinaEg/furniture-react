import { useParams } from "react-router-dom";

import { roomslist } from "../components/rooms/roomslist";

import styles from "../components/rooms/rooms.module.scss";

import pageContainer from "../components/wrapper/_wrapper.module.scss";

const Room = () => {
  const { id } = useParams();
  const room = roomslist[id];
  return (
    <>
      <main className="page__main main">
        <article className={`${styles.room} main__room`}>
          <div className={pageContainer.page__container}>
            <div className="container d-flex flex-column align-items-center">
              <h2 className={`${styles.title} text-center room__title`}>
                {room.title}
              </h2>

              <h4 className={`${styles.subtitle_room} text-center`}>
                {room.subtitle}
              </h4>
              <div className="d-flex w-100">
                <img
                  className="img-fluid w-100"
                  src={room.topImg}
                  alt={room.topImg}
                />
              </div>
            </div>
          </div>
        </article>
        <article className="main__description description">
          <div className={pageContainer.page__container}>
            <div className="container">
              <div className="row gap-5">
                <div className="col gap-5">
                  <h3 className={styles.description__title}>
                    {room.leftPartTitle}
                  </h3>
                  <p className={`${styles.description__text} mb-5`}>
                    Online learning with us does not interfere with your daily
                    life. because learning can be done anytime and anywhere.
                    Online learning with us does not interfere with your daily
                    life. because learning can be done anytime and anywhere.
                    Online learning with us does not interfere with your daily
                    life. because learning can be done anytime and anywhere.
                  </p>
                  <div className="row">
                    <div className={`${styles.description__date} col`}>
                      {room.date}
                    </div>
                    <div className={`${styles.description__name} col`}>
                      Interior Design - Furniture
                    </div>
                  </div>
                </div>
                <div className="col">
                  <h3 className={styles.description__title}>
                    {room.rightPartTitle}
                  </h3>
                  <p className={`${styles.description__text} mb-5`}>
                    Online learning with us does not interfere with your daily
                    life. because learning can be done anytime and anywhere.
                    Online learning with us does not interfere with your daily
                    life. because learning can be done anytime and anywhere.
                  </p>
                  <p className={styles.description__text}>
                    Online learning with us does not interfere with your daily
                    life. because learning can be done anytime and anywhere.
                    Online learning with us does not interfere with your daily
                    life. because learning can be done anytime and anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className={`${styles.photos} main__photos`}>
          <div className={pageContainer.page__container}>
            <div className="container">
              <div className="row gap-5">
                <div className="col">
                  <img className="img-fluid" src={room.img1left} alt="chair" />
                </div>
                <div className="col">
                  <img className="img-fluid" src={room.img1right} alt="shelf" />
                </div>

                <div className="col-12">
                  <img className="img-fluid" src={room.img2} alt="sofa" />
                </div>

                <div className="col">
                  <img className="img-fluid" src={room.img3left} alt="sofa" />
                </div>

                <div className="col">
                  <img
                    className="img-fluid"
                    src={room.img3right}
                    alt="hallway"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Room;
