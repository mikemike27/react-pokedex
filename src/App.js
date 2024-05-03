import './App.css';
import Search from './Components/Search/Search';
import Info from './Components/Info/Info';

function App() {


  return (
    <div className="App">
      <Search />
      <Info />
    </div>
  );
}

export default App;

//appjs is the heart
//search has an inputbox for user to enter pokemon name. when user click the submit button. it set the name state,
//we are going to use useEffect, in the dependecies it's looking at the name state. after setting the name state, useEffect is going to call fetch pokeapi to fetch the data
//after fetching the data, it will pass the info to the info component
//inside the info component, it will have all the state. 

//search bar to search for pokemon name, it should a separate component
//when user type a pokemon name and submit, it will call fetch to the pokeapi to fetch the data
//when the data received and parsed into json, we pass the json to the info component
//format:
//sprite img
//<name>
//<pokemon id>
//Type <type>
//Weakness <weakness>
//Abilities <abilities>
//Moves: Pound, Leaf Blades, Flamethrower
