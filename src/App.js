import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import { fetchData } from "./util/fetchData";
import Header from "./components/Header";
import CardList from "./components/CardList";
import ListItem from "./components/ListItem";

const set = new Set();

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [favCharacters, setFavCharacters] = useState([]);

  const [page, setPage] = useState(0);
  const [characterName, setCharacterName] = useState();
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await fetchData();
      const characters = res.results;
      setCharacterList(characters);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const res = await fetchData(page, characterName);
      const characters = res.results;
      if (characters) {
        setError(false);
        setCharacterList(characters);
      } else {
        setError(true);
      }
    }

    getData();
  }, [page, characterName]);

  function retrieveCharacterName(name) {
    setCharacterName(name);
  }

  function retrievePage(pageSelected) {
    setPage(pageSelected);
  }

  function onSelectCharacter(character) {
    setSelectedCharacter(character);
    set.add(character);
    setFavCharacters([...set]);
  }

  return (
    <div className="appContainer">
      <Header filterhandler={retrieveCharacterName} />
      <CardList title="Favourites">
        {favCharacters.length > 0 ? (
          favCharacters.map((char, i) => {
            return (
              <ListItem key={i} onClick={() => onSelectCharacter(char)}>
                {char.name}
              </ListItem>
            );
          })
        ) : (
          <p>Favourite characters not added</p>
        )}
      </CardList>
      <CardList title="Characters">
        {error ? (
          <p>Sorry cannot find characters</p>
        ) : (
          characterList.map((char, i) => {
            return (
              <ListItem key={i} onClick={() => onSelectCharacter(char)}>
                {char.name}
              </ListItem>
            );
          })
        )}
      </CardList>
      <Pagination pagehandler={retrievePage} />
    </div>
  );
}

export default App;
