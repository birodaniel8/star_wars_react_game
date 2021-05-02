// Although this I have decided to collect all the data from the API with the Python package,
// this code snippet contains the details of how to fetch and store the data for multiple characters

var data = {
  characters: [],
};

const [charactersLoaded, setCharactersLoaded] = useState(false);

const loadCharacters = () => {
  fetch("https://swapi.dev/api/people/", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const peopleCount = response.count;
      var fetches = [];
      for (let i = 0; i < peopleCount; i++) {
        fetches.push(
          fetch(`http://swapi.dev/api/people/${i + 1}/`)
            .then((response) => response.json())
            .then((response) => {
              if (!("detail" in response)) {
                data.characters.push(response);
              }
            })
        );
      }
      Promise.all(fetches).then(() => {
        setCharactersLoaded(true);
      });
    });
}


useEffect(() => {
  loadCharacters();
}, []);