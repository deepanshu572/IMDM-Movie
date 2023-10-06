import React,{useEffect , useState} from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {Link} from "react-router-dom";
import "./Movies.css";


function Cards({element}) {
    const [isLoading, setIsLoading] = useState(true)
useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    }, 1500)
}, [])


  return <>
    {
     isLoading 
    ?
    <div className="cards">
        <SkeletonTheme  color = "#202020" highlightColor='#444'>
            <Skeleton height={300} duration={2} />
        </SkeletonTheme>
    </div>
    :
    <Link to={`/Movie/${element.id}`} style={{textDecoration:"none", color:"white"}}>
    <div className="cards">
        <img className="cards__img" src={`https://image.tmdb.org/t/p/original${element?element.poster_path:""}`} />
        <div className="cards__overlay">
            <div className="card__title">{element?element.original_title:""}</div>
            <div className="card__runtime">
                {element?element.release_date:""}
                <span className="card__rating">{element?element.vote_average:""}<i className="fas fa-star" /></span>
            </div>
            <div className="card__description">{element ? element.overview.slice(0,118)+"..." : ""}</div>
        </div>
    </div>
</Link>
   
      }
   
    </>
  
}

export default Cards