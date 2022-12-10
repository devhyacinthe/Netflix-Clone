import React, { useEffect, useState } from 'react'
import '../style/Banner.css'
import axios from '../axios'
import requests from '../Requests'


const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
      )
      return console.log(request);
    }

    fetchData()
  }, [])

  

  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url(${ movie ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : "https://wallpapercave.com/wp/wp1917118.jpg" })`,
        backgroundPosition: "center center",
    }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie ? movie.title || movie.name || movie.original_name : "NetFlix and Chill"}</h1>
        <div className='banner_buttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>{movie ? movie.overview : 'This is a test description'}</h1>
      </div>

      <div className='banner--fadeBottom'/>
    </header>
  )
}

export default Banner
