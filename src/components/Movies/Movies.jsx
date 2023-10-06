import { useEffect, useState } from 'react'
import React from 'react'
import {Link} from "react-router-dom";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Movies.css'
import MoviesList from './MoviesList';
export default function Movies(props) {
    const [totalResults, setTotalResults] = useState()
    const [results, setresults] = useState([])

    const updateMovie = async ()=>{
        const url =
        `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
      let data = await fetch(url);
      let passedData = await data.json();
      setresults(passedData.results)
      setTotalResults(passedData.totalResults)
      // console.log(passedData)
  
    }
     useEffect(() => {
       updateMovie();
     }, [])


  return (
    <div className="poster"><Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >
          {results.map((element) => {
            console.log(element)
            return <Link style={{textDecoration:"none",color:"white"}} to={`/Movie/${element.id}`} >
            <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original${element && element.backdrop_path}`} />
            </div>
            <div className="posterImage__overlay">
                <div className="posterImage__title">{element ? element.original_title: ""}</div>
                <div className="posterImage__runtime">
                    {element ? element.release_date : ""}
                    <span className="posterImage__rating">
                        {element ? element.vote_average :""}
                        <i className="fa-solid fa-star" style={{color: '#ffffff'}}></i>
                    </span>
                </div>
                <div className="posterImage__description">{element ? element.overview : ""}</div>
            </div>
        </Link>
              
             
})}     
 </Carousel>    <MoviesList/>
           </div>

  )
}