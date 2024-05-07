import { useState } from "react";

function Search({searchPokemon}){

    const [name, setName] = useState("");

    return(
        <div>
            <form onSubmit={e=>searchPokemon(e,name)}>
                <input type="text" placeholder="Enter pokemon name" value={name} onChange={e=>setName(e.target.value)}/>
                <input type="submit" value="Search" />
            </form>
        </div>
    )

}

export default Search