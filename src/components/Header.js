import {useState} from 'react';
import styles from './Header.module.css';

function NavBar({filterhandler}) {
  const [characterName, setCharacterName] = useState();

  function characterHandler(e) {
    setCharacterName(e.target.value);
    filterhandler(characterName);
  }

  return (
    <div className={styles.header}>
      <div> logo </div>
      <div>search: <input type="text" onChange={characterHandler} /></div>
    </div>
  )
}

export default NavBar