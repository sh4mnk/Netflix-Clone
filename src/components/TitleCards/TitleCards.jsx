
import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import Cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({title,category}) => {

  
  const CardRef = useRef();//this is used for scrolling the card list if needed in future

  const handwheel = (event) => {
    event.preventDefault();
    CardRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    CardRef.current.addEventListener('wheel', handwheel);
  }, []);


  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className='card-list' ref={CardRef}>
        {Cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards