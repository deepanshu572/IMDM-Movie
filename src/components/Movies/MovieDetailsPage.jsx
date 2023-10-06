import React,{ useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
function MovieDetailsPage() {
      const [movieDetails, setMovieDetails] = useState()
        const {id} = useParams()

        useEffect(()=>{
            getData()
            window.scrollTo(0,0)
        },[])

        const getData =  ()=>{
            fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieDetails(data))
           
            
        } 
  return (
    <>
          <div className="movie_details_bg"> 
             <img src={`https://image.tmdb.org/t/p/original/${movieDetails ? movieDetails.backdrop_path : ""}`} /> 
          </div>
          <div className="movie-flex">
            <div className="left">
                <img src={`https://image.tmdb.org/t/p/original/${movieDetails ? movieDetails.poster_path : ""}`} />
            </div>
            <div className="right">
                <div className="movie-text">
                        <div className="text1">{movieDetails ? movieDetails.original_title : ""}</div>
                    <div className="text2">{movieDetails ? movieDetails.tagline : ""}</div>
                    <div className="rating">
                    {movieDetails ? movieDetails.vote_average: ""} <i class="fas fa-star" />
                    <span>{movieDetails ? "(" + movieDetails.vote_count + ") votes" : ""}</span>
                    </div>
                  <div className="text3">  {movieDetails ? movieDetails.runtime + " mins" : ""}</div>
                   <div className="text4">{movieDetails ? "Release date: " + movieDetails.release_date : ""}</div>
                    <div className="text5"> {
                                movieDetails && movieDetails.genres
                                ? 
                                movieDetails.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }</div>
                    
                    
                  
                </div>
                <div className="movie-desc">
                      <div className="text6">
                        <h2>Description</h2>
                        <div className="text7">{movieDetails ? movieDetails.overview : ""}</div> 
                    </div>
                </div>
            </div>
          </div>
      <div className="links">
        <div className="link-name">
            <p>UseFull Links</p>
            {
                    movieDetails && movieDetails.homepage && <a href={movieDetails.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    movieDetails && movieDetails.imdb_id && <a href={"https://www.imdb.com/title/" + movieDetails.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
        </div>
      
      </div>
    </>
  )
}

export default MovieDetailsPage