export async function fetchData(page, name) {
  let url = "https://rickandmortyapi.com/api/character";
  if (page) {
    url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  }
  if (name) {
    url = `https://rickandmortyapi.com/api/character/?name=${name}`;
  }

  const data = await fetch(url);
  
  if (data.ok) {
    return data.json();
  } else {
    console.log('Something went wrong');
  }

}
