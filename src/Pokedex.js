import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './Pokedex.css';
const Pokedex = (props) => {
  const navigate=useNavigate();
  const [activeCard, setActiveCard] = useState(null);
  const handleImageClick=(index)=>{
    setActiveCard(props.index);
    setTimeout(()=>{ 
      navigate('/PokedexDetails',{state:{...props}})
    },1000);
  }
  return (
   <>
      <Card className={`CardMain ${activeCard === props.index ? 'with-border' : ''}`}>
        <div className='Imagediv' onClick={()=>handleImageClick(props.index)}>
        <Card.Img variant="top" style={{height:"150px",width:"170px",paddingLeft:"30px"}}
         src={props.img}/>
        </div>
        <p className='Numberid'>
           {props.number}
        </p>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <div  className='div1st' style={{backgroundColor:props.divcolor}}>{props.type}</div>
          {props.type1 && props.type1 !== "none" && (
            <div className='div1st' style={{ backgroundColor: props.divcolor1, color: 'white', marginLeft: '5px' }}>
              {props.type1}
            </div>
          )}
        </Card.Body>
      </Card>
   </>
  )
}

export default Pokedex
