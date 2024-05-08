import './App.css';
import Search from './Components/Search/Search';
import Info from './Components/Info/Info';
import { useMemo, useState } from 'react';

function App() {

  const [url, setUrl] = useState("");
  const [pokeInfo, setPokeInfo] = useState({});
  const [loaded, setLoaded] = useState(false);

  useMemo(()=>{

    setLoaded(false);

    if(url != ""){
      getPokeInfo();
    }

  },[url]);

  function searchPokemon(event, name){
    event.preventDefault();

    //console.log(name);

    if(name != ""){
      
      let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      setUrl(url);

      //getPokeInfo();

    }

  }

  async function getPokeInfo(){
    
    let response;
    let json;

    try{
      
      response = await fetch(url);
      console.log(response);
      json = await response.json();
      console.log(json);
    }
    catch(err){
      console.log(err);
    }
    finally{

      setPokeInfo(json);
      setLoaded(true);
    
    }
    //console.log(pokeInfo.sprites.front_default);
  }

  return (
    <div className="App">
      <Search searchPokemon={searchPokemon}/>
      {
        loaded &&
        <Info pokeInfo={pokeInfo}/>
      }
    </div>
  );
}

export default App;


//search bar to search for pokemon name, it should a separate component
//when user type a pokemon name and submit, it will call fetch to the pokeapi to fetch the data
//when the data received and parsed into json, we pass the json to the info component
//format:
//sprite img
//<name>
//<pokemon id>
//Type <type>
//Abilities <abilities>
//Hp
//Atk
//Def
