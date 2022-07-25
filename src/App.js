import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import { fetchData } from "./util/fetchData";
import Header from "./components/Header";
import CardList from "./components/CardList";
import ListItem from "./components/ListItem";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [favCharacters, setFavCharacters] = useState([]);

  const [page, setPage] = useState(0);
  const [characterName, setCharacterName] = useState();

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
      setCharacterList(characters);
    }
    try {
      getData();
    } catch (error) {}
  }, [page, characterName]);

  function retrieveCharacterName(name) {
    setCharacterName(name);
  }

  function retrievePage(pageSelected) {
    setPage(pageSelected);
  }

  return (
    <div className="appContainer">
      <Header filterhandler={retrieveCharacterName} />
      <CardList>
        {characterList.map((char, i) => {
          return <ListItem key={i}>{char.name}</ListItem>;
        })}
      </CardList>
      <Pagination pagehandler={retrievePage} />
    </div>
  );
}

export default App;
