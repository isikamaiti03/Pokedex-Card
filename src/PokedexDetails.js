import React from 'react'
import './PokedexDetails.css';
import { useLocation } from 'react-router-dom';
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
const PokedexDetails = () => {
  const location = useLocation();
  
  const { title, img, number, type, type1, divcolor, divcolor1 ,desc,prevnumber,prevtitle,aftertitle,afternumber} = location.state || {};
  return (
   <>
       <header className='headerClass'>
        {/* <div style={{paddingLeft:"18px",fontSize:"22px"}}><button style={{fontSize:"18px",height:"28px",
          cursor:"pointer",width:"30px",color:"black",border:"none", backgroundColor:"white",borderRadius:"50%",marginRight:"15px",
        }} ><KeyboardArrowLeftTwoToneIcon/></button><span style={{fontWeight:"750",marginRight:"5px"}}>{prevnumber}</span> <span style={{color:"rgb(75, 73, 73)",fontWeight:"790"}}>{prevtitle}</span></div>
        <div style={{paddingLeft:"40px",fontSize:"22px"}}><span style={{color:"rgb(75, 73, 73)",fontWeight:"790",marginRight:"5px"}}>{aftertitle}</span><span style={{fontWeight:"750"}}>{afternumber}</span>
        <ChevronRightTwoToneIcon  style={{fontSize:"18px",height:"28px"
         ,cursor:"pointer" ,width:"30px",color:"black",border:"none", backgroundColor:"white",borderRadius:"50%",marginLeft:"15px",
        }}/>
        </div> */}
        <h2>Pokémon</h2>
       </header> 
      <h3 className='text-center' >{title}<span style={{fontSize:"30px",color:"rgba(75, 73, 73,0.7)",font:"sans-serif",marginLeft:"6px"}}>{number}</span></h3>
      <div className='bodyDiv'>
          <div className='imgdiv'>
            <img src={img}  className='imgClass'/> 
          </div>
          <div className='descriptDiv'>
          {desc}
           <p style={{marginTop:"20px",fontWeight:"500",fontSize:"18px",fontFamily:"inherit",marginBottom:"20px",}}>
          Versions:<CatchingPokemonTwoToneIcon style={{fontSize:"50px",color:"rgb(26, 151, 173)",border:"4px solid rgb(16, 174, 227)",borderRadius:"50%",paddingTop:'5px',marginLeft:"16px"}}/><CatchingPokemonTwoToneIcon  style={{fontSize:"40px",color:"rgb(173, 26, 55)",marginLeft:"10px"}}/>
          </p>
          
            <p>Type</p>
          <div className='MainTypeDiv'>
            <div className='TypeDiv' style={{backgroundColor:divcolor}}>{type}</div>
            {type1 && type1 !== "none" && (
            <div className='TypeDiv1' style={{backgroundColor:divcolor1}}>{type1}</div>
            )}
          </div>
          </div>
          
      </div>
   </>
  )
}
export default PokedexDetails

