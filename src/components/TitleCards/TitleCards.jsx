
import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import Cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([]);

  const CardRef = useRef();//this is used for scrolling the card list if needed in future



  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWI1M2FlMTA2Mjc4NDBjZDc4NTA4ZDc4ZTgxYjM3OSIsIm5iZiI6MTc1OTU1ODI4OS40MDQsInN1YiI6IjY4ZTBiYTkxYzNiYjE0MzMyYTM2ZGE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tRYnwGkLWk_hG54cvu4nKz503QmbjYBEU_KqS8hDBMs'
    }
  };


  const handwheel = (event) => {
    event.preventDefault();
    CardRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category:"now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results || []))
      .catch(err => console.error(err));



    CardRef.current.addEventListener('wheel', handwheel);
  }, []);


  return (
    <div className='titlecards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className='card-list' ref={CardRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
            <p>{card.original_title || 'No Title'}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards