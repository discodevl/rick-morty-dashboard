import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import { fetchCharacters } from "./util/fetchData";
import Header from "./components/Header";
import CardList from "./components/CardList";
import ListItem from "./components/ListItem";
import Modal from "./components/Modal";
import BackDrop from "./components/BackDrop";

const charactersSet = new Set();

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [favCharacters, setFavCharacters] = useState([]);

  const [page, setPage] = useState(0);
  const [characterName, setCharacterName] = useState();
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await fetchCharacters(page, characterName);
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
    setPage(null);
    console.log(name);
    setCharacterName(name);
  }

  function retrievePage(pageSelected) {
    setPage(pageSelected);
  }

  function onAddCharacter(character) {
    charactersSet.add(character);
    setFavCharacters([...charactersSet]);
  }

  function onRemoveCharacter(character) {
    charactersSet.delete(character);
    setFavCharacters([...charactersSet]);
  }

  function onSelectCharacter(character) {
    setSelectedCharacter(character);
  }

  function convertString(gender) {
    if(gender === "Female") {
      return 'F';
    } else if(gender === "Male") {
      return 'M';
    } else {
      return '-';
    }
  }

  return (
    <div className="appContainer">
      {selectedCharacter && <Modal character={selectedCharacter} />}
      {selectedCharacter && (
        <BackDrop onCancel={() => setSelectedCharacter(null)} />
      )}
      <Header filterhandler={retrieveCharacterName} />
      <CardList title="Favourites">
        {favCharacters.length > 0 ? (
          favCharacters.map((char, i) => {
            return (
              <ListItem
                key={i}
                onSelect={() => onSelectCharacter(char)}
                onClick={() => onRemoveCharacter(char)}
              >
                <p>#{char.id}</p> <p>{char.name}</p> <p>{convertString(char.gender)}</p>
              </ListItem>
            );
          })
        ) : (
          <p>Add your fav characters</p>
        )}
      </CardList>
      <CardList title="Characters" main>
        {error ? (
          <p>Sorry cannot find characters</p>
        ) : (
          characterList.map((char, i) => {
            return (
              <ListItem
                main
                key={i}
                onSelect={() => onSelectCharacter(char)}
                onClick={() => onAddCharacter(char)}
              >
                <p>#{char.id}</p> <p>{char.name}</p> <p>{convertString(char.gender)}</p>
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
