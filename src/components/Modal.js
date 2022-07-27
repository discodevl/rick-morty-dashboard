import { useEffect, useState } from "react";
import { fetchEpisode } from "../util/fetchData";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";

function Modal({ character }) {
  const episodesIds = new Set();
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    character.episode.map(async (url) => {
      const ep = await fetchEpisode(url);
      if (!episodesIds.has(ep.id)) {
        episodesIds.add(ep.id);
        setEpisodes((eps) => [...eps, ep]);
      }
    });
  }, []);

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <h2 style={{ textAlign: "center" }}>{character.name}</h2>
      <div className={styles.body}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            alt="character"
            src={character.image}
          />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentLine}>
            <h3>Species:&nbsp;</h3>
            <p>{character.species}</p>
          </div>
          <div className={styles.contentLine}>
            <h3>Origin:&nbsp;</h3>
            <p> {character.origin.name}</p>
          </div>
          <div className={styles.contentLine}>
            <h3>Location:&nbsp;</h3>
            <p>{character.location.name}</p>
          </div>
          <div className={styles.contentLine}>
            <h3>Gender:&nbsp;</h3>
            <p>{character.gender}</p>
          </div>
          <div className={styles.contentLine}>
            <h3>Status:&nbsp;</h3>
            <p>{character.status}</p>
          </div>
          
        </div>
      </div>
      <h3 style={{ textAlign: "center" }}>
        Episodes with {character.name}
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
