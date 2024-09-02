import React, { useState } from 'react';
import './PokedexMain.css';
import SearchIcon from '@mui/icons-material/Search';
import Pokedex from "./Pokedex";
import img0001 from './images/001.png'
import img0002 from './images/002.png'
import img0003 from './images/003.png'
import img0004 from './images/004.png'
import img0005 from './images/005.png'
import img0006 from './images/006.png'
import img0007 from './images/007.png'
import img0008 from './images/008.png'
import img0009 from './images/009.png'
import img0010 from './images/010.png'
import img0011 from './images/011.png'
import img0012 from './images/012.png'
import img0013 from './images/013.png'
import img0014 from './images/014.png'
import img0015 from './images/015.png'
import img0016 from './images/016.png';
import PokedexDetails from './PokedexDetails';
const PokedexMain = () => {
  // State to store search input
  const [searchTerm, setSearchTerm] = useState('');

  // List of Pokémon data
  const pokemonData = [
    { title: "Bulbasaur", img: img0001, number: "#0001", type: "Grass", type1: "Poison", divcolor: "rgb(86, 223, 97)", divcolor1: "rgb(184, 111, 178)"
      ,desc:"For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",prevtitle:"Pidgey",prevnumber:"#0016",
      aftertitle:"Ivysaur",afternumber:"#0002" },
    { title: "Ivysaur", img: img0002, number: "#0002", type: "Grass", type1: "Poison", divcolor: "rgb(86, 223, 97)", divcolor1: "rgb(184, 111, 178)",
      desc:"The more sunlight Ivysaur bathes in, the more strength wells up within it, allowing the bud on its back to grow larger.",
      prevtitle:"Bulbasaur",prevnumber:"#0001",
      aftertitle:"Venusaur",afternumber:"#0003" 
     },
    { title: "Venusaur", img: img0003, number: "#0003", type: "Grass", type1: "Poison", divcolor: "rgb(86, 223, 97)", divcolor1: "rgb(184, 111, 178)" ,
      prevtitle:"Ivysaur",prevnumber:"#0002",
      aftertitle:"Charmender",afternumber:"#0004" ,
    desc:"While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime."},
    { title: "Charmander", img: img0004, number: "#0004", type: "Fire", type1: "none", divcolor: "rgb(241, 128, 21)" ,
      prevtitle:"Venusaur",prevnumber:"#0003",
      aftertitle:"Charmeleon",afternumber:"#0005" ,
      desc:"The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly."
    },
    { title: "Charmeleon", img: img0005, number: "#0005", type: "Fire", divcolor: "rgb(241, 128, 21)" ,
      prevtitle:"Charmender",prevnumber:"#0004",
      aftertitle:"Charizard",afternumber:"#0006" ,
      desc:"When it swings its burning tail, the temperature around it rises higher and higher, tormenting its opponents."
    },
    { title: "Charizard", img: img0006, number: "#0006", type: "Fire", type1: "Flying", divcolor: "rgb(241, 128, 21)", divcolor1: "rgb(206, 78, 142)",
      prevtitle:"Charmeleon",prevnumber:"#0005",
      aftertitle:"Squirtle",afternumber:"#0007" ,
      desc:"If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade."
     },
    { title: "Squirtle", img: img0007, number: "#0007", type: "Water" ,
      prevtitle:"Charizard",prevnumber:"#0006",
      aftertitle:"Wartortle",afternumber:"#0008" ,
      desc:"After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth."
    },
    { title: "Wartortle", img: img0008, number: "#0008", type: "Water",
      prevtitle:"Squirtle",prevnumber:"#0007",
      aftertitle:"Blastoise",afternumber:"#0009" ,
      desc:"Wartortle’s long, furry tail is a symbol of longevity, so this Pokémon is quite popular among older people."
     },
    { title: "Blastoise", img: img0009, number: "#0009", type: "Water",
      prevtitle:"Wartortle",prevnumber:"#0008",
      aftertitle:"Caterpie",afternumber:"#0010" ,
      desc:"It deliberately increases its body weight so it can withstand the recoil of the water jets it fires."
     },
    { title: "Caterpie", img: img0010, number: "#0010", type: "Bug", divcolor: "green" ,
      prevtitle:"Blastoise",prevnumber:"#0009",
      aftertitle:"Metapod",afternumber:"#0011" ,
      desc:"For protection, it releases a horrible stench from the antenna on its head to drive away enemies."
    },
    { title: "Metapod", img: img0011, number: "#0011", type: "Bug", divcolor: "green" ,
      prevtitle:"Caterpie",prevnumber:"#0010",
      aftertitle:"Butterfree",afternumber:"#0012" ,
      desc:"It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack."
    },
    { title: "Butterfree", img: img0012, number: "#0012", type: "Bug", type1: "Flying", divcolor: "green", divcolor1: "rgb(206, 78, 142)",
      prevtitle:"Metapod",prevnumber:"#0011",
      aftertitle:"Pikachu",afternumber:"#0013" ,
      desc:"It loves the nectar of flowers and can locate flower patches that have even tiny amounts of pollen."
     },
    { title: "Pikachu", img: img0013, number: "#0013", type: "Electric", divcolor: "yellow" ,
      prevtitle:"Butterfree",prevnumber:"#0012",
      aftertitle:"Rattata",afternumber:"#0014" ,
      desc:"Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves."
    },
    { title: "Rattata", img: img0014, number: "#0014", type: "Normal", divcolor: "rgb(196,196,196)" ,
      prevtitle:"Pikachu",prevnumber:"#0013",
      aftertitle:"Beedrill",afternumber:"#0015" ,
      desc:"Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy."
    },
    { title: "Beedrill", img: img0015, number: "#0015", type: "Bug", type1: "Poison", divcolor: "green", divcolor1: "rgb(184, 111, 178)" ,
      prevtitle:"Rattata",prevnumber:"#0014",
      aftertitle:"Pidgey",afternumber:"#0016" ,
      desc:"It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly."
    },
    { title: "Pidgey", img: img0016, number: "#0016", type: "Normal", type1: "Flying", divcolor: "rgb(196,196,196)", divcolor1: "rgb(206, 78, 142)",
      prevtitle:"Beedrill",prevnumber:"#0015",
      aftertitle:"Bulbasaur",afternumber:"#0001" ,
      desc:"Very docile. If attacked, it will often kick up sand to protect itself rather than fight back."
     }
  ];

  // Filtered Pokémon based on search term
  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pokemon.number.includes(searchTerm)
  );

  return (
    <>
      <h2 className='heading'>Pokémon</h2>
      <header>
        <p className='Paragraph1'>Name or Number</p>
        <div style={{ display: "flex" }}>
          <div className='innerdiv'>
            <input
              type="text"
              className='inputdiv'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button className='searchbtn'><SearchIcon /></button>
            <p className='Paragraph2'>Use the Advanced Search to explore Pokemon by type, weakness, Ability, and more!</p>
          </div>
          <p className='showText'>Search for a Pokemon by name or using its National Pokedex number.</p>
        </div>
      </header>

      {/* Display filtered Pokémon */}
      <div style={{ marginLeft: "250px", width: "899px", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {filteredPokemon.map((pokemon,index) => (
          
          <Pokedex
            key={pokemon.number}
            index={index}
            title={pokemon.title}
            img={pokemon.img}
            number={pokemon.number}
            prevtitle={pokemon.prevtitle}
            prevnumber={pokemon.prevnumber}
            aftertitle={pokemon.aftertitle}
            afternumber={pokemon.afternumber}
            type={pokemon.type}
            type1={pokemon.type1}
            divcolor={pokemon.divcolor}
            divcolor1={pokemon.divcolor1}
            desc={pokemon.desc}
          />
        ))}
      </div>
    </>
  );
};

export default PokedexMain;
