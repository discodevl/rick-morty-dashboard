export async function fetchCharacters(page, name) {
  let url = "https://rickandmortyapi.com/api/character";
  if (page) {
    url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  }
  if (name) {
    url = `https://rickandmortyapi.com/api/character/?name=${name}`;
  }
  if(name && page) {
    url = `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`;
  }

  const data = await fetch(url);
  
  if (data.ok) {
    return data.json();
  }
}

export async function fetchEpisode(url) {
  const data = await fetch(url);
  
  if (data.ok) {
    return data.json();
  }
}
