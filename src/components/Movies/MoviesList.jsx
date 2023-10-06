import React,{ useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import Cards from './Cards';
import {useParams} from "react-router-dom"
import "./Movies.css";


function MoviesList() {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()
     
    useEffect(()=>{
        getData()
    },[])
    
    useEffect(()=>{
        getData()
    },[type])

    const getData = () =>{
        fetch( `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

  return (
    <div> <h2 className='heading-movie' >{(type ? type : "popular").toUpperCase()}</h2>
         <div className="container"  > 
       
        {
           movieList.map(element =>(
            <Cards element={element}  />
           )) 
        }
        </div>
    </div>
  )
}

export default MoviesList