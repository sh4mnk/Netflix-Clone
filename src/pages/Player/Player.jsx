
import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const [apiData, setApiData] = useState({

    name: "",
    key: "",
    published_at: "",
    type: "",

  })


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWI1M2FlMTA2Mjc4NDBjZDc4NTA4ZDc4ZTgxYjM3OSIsIm5iZiI6MTc1OTU1ODI4OS40MDQsInN1YiI6IjY4ZTBiYTkxYzNiYjE0MzMyYTM2ZGE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tRYnwGkLWk_hG54cvu4nKz503QmbjYBEU_KqS8hDBMs'
    }
  };

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, []);





  return (
    <div className='player'>

      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player