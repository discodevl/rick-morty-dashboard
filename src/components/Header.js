import {useState} from 'react';

function NavBar({filterhandler}) {
  const [characterName, setCharacterName] = useState();

  function characterHandler(e) {
    setCharacterName(e.target.value);
    filterhandler(characterName);
  }

  return (
    <div>
      <input type="text" onChange={characterHandler} />
    </div>
  )
}

export default NavBar