import React from 'react'
import {Link} from "react-router-dom";

import './NavBar.css'

export default function NavBar() {
  return (
    <div>
       <div className="nav">
          {/* <Link  aria-current="page" to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="" /></Link>  
            <Link to="/Popular">Popular</Link>
            <Link to="/TopRated">Top Rated</Link>
            <Link to="/Upcoming">upcoming</Link> */}
             <Link  aria-current="page" to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="" /></Link>  
            <Link to="/movies/popular">Popular</Link>
            <Link to="/movies/top_rated">Top Rated</Link>
            <Link to="/movies/upcoming">Upcoming</Link>


            
        
        </div>
    </div>
  )
}
