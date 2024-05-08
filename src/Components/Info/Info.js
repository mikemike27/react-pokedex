import './Info.css';

import { useEffect, useState } from "react";

function Info({pokeInfo}){

    const [spriteUrl, setSpriteUrl] = useState("");
    const [id, setId] = useState(0);
    const [type, setType] = useState("");
    const [abilities, setAbilities] = useState("");
    const [hp, setHp] = useState(0);
    const [attack, setAttack] = useState(0);
    const [defense, setDefense] = useState(0);

    function capitaliseLetter(str){
        return str?.charAt(0).toUpperCase() + str?.slice(1);
    }

    useEffect(()=>{
        
        setSpriteUrl(pokeInfo?.sprites?.front_default);
        
        setId(pokeInfo?.id);
        
        setType(capitaliseLetter(pokeInfo?.types?.[0].type.name));
        
        setAbilities(capitaliseLetter(pokeInfo?.abilities?.[0].ability.name));
        
        setHp(pokeInfo?.stats?.[0].base_stat);
        
        setAttack(pokeInfo?.stats?.[1].base_stat);
        
        setDefense(pokeInfo?.stats?.[2].base_stat);
        //console.log(pokeInfo);
    },[pokeInfo]);

    return(
        <div>
            <img src={spriteUrl}/>
            <p>No. {id}</p>
            <p>Type: {type}</p>
            <p>Abilities: {abilities}</p>
            <p>Hp: {hp}</p>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
        </div>
    )

}

export default Info