import React from "react";

const rickyAndMortyCharactersEndpoint =
  "https://rickandmortyapi.com/api/character";

//const characterInfo = "https://rickandmortyapi.com/api/character/2";

//this is a component
const RickAndMortyCharactersCards = () => {
  const [characters, setCharacters] = React.useState([]);

  const [isViewingSingleCharacter, setIsViewingSingleCharacter] =
    React.useState(false);

  React.useEffect(() => {
    fetch(rickyAndMortyCharactersEndpoint)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, [setIsViewingSingleCharacter]); //dependency array, it will keep fetching data continously otherwise.

  console.log(characters);

  // React.useEffect(() => {
  //   fetch(characterInfo)
  //     .then((res) => res.json())
  //     .then((data) => setIsViewingSingleCharacter(data.results));
  // }, [setIsViewingSingleCharacter]);

  return (
    <React.Fragment>
      {isViewingSingleCharacter ? (
        <React.Fragment>
          <p>singleChar</p>
          <button onClick={() => setIsViewingSingleCharacter(false)}>X</button>
        </React.Fragment>
      ) : (
        <div className="characters-wrapper">
          {characters.map((character) => (
            <div className="character-card" key={character.name}>
              <div className="character-card-top">
                <img src={character.image} alt={character.name} />
              </div>
              <p>Character name: {character.name}</p>
              <p>Species: {character.species}</p>
              <p>Status: {character.status}</p>
              <button onClick={() => setIsViewingSingleCharacter(true)}>
                Get Character Info
              </button>
              {/* {characters.map((character) =>
               <div className="singleCharacter">
                <p>Origin:{character.origin}</p>
                <p>Location:{character.location}</p>
              </div> */}
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default RickAndMortyCharactersCards;

//My pseudocode
// 1. Add a button to each character card
// 2. When a user clicks the button, it should set a piece of state to the character.url property.
// 3. There should be another useEffect hook with the state variable from point 2 in the dependency array. The function inside this use effect should call the api with the endpoint to get a single character
// 4. Handle the promise, set the singleCharacter to state and set the viewingSingleCharacter mode to true
// 5. Add a turnery to the return statement to return different UI is viewingSingleCharacter is true
// 6. Design your UI for this state - don't forget to put in a button that reverts the state back!
// fetch(characterInfo)

//   .then((res) => res.json())
//   .then((data) => setIsViewingSingleCharacter(data.results));
