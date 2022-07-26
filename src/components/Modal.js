import { useEffect, useState } from "react";
import { fetchEpisode } from "../util/fetchData";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";

function Modal({ character }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    function fetchEps() {
      character.episode.map(async (url) => {
        const ep = await fetchEpisode(url);
        setEpisodes((eps) => [...eps, ep]);
      });
    }
    fetchEps();
  }, []);

  console.log({ episodes });

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <h2 style={{ textAlign: "center" }}>{character.name}</h2>
      <div className={styles.body}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={character.image} />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentLine}>
            <h3>Gender: </h3>
            <p>{character.gender}</p>
          </div>
          <div className={styles.contentLine}>
            <h3>Species: </h3>
            <p>{character.species}</p>
          </div>
          <div className={styles.contentLine}>
            <h3>Status: </h3>
            <p>{character.status}</p>
          </div>
          <div className={styles.contentLine}>
            <h3>Origin: </h3>
            <p> {character.origin.name}</p>
          </div>
          <div className={styles.contentLine}>
            <h3>Location: </h3>
            <p>{character.location.name}</p>
          </div>
        </div>
      </div>
      <h3 style={{ textAlign: "center" }}>
        Episodes containing {character.name}
      </h3>
      <div className={styles.epList}>
        {episodes.map((ep, i) => {
          return (
            <div key={i} className={styles.item}>
              <p>{ep.episode}</p> <p>{ep.name}</p> <p>{ep.air_date}</p>
            </div>
          );
        })}
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
