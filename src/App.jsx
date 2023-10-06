import React from 'react'
import {
  BrowserRouter as Router,
  Route, 
  Routes,
} from "react-router-dom";
import NavBar from './components/Navbar/NavBar';
import './App.css';
import Movies from './components/Movies/Movies';
import MoviesList from './components/Movies/MoviesList';
import MovieDetailsPage from './components/Movies/MovieDetailsPage';



export default function App(props) {
  return (
    <div>
       <Router>
      <div> 
     
          <NavBar/>
      <Routes>
          
             <Route index element={<Movies/>}></Route>
            <Route path="movie/:id" element={<MovieDetailsPage/>}></Route>
            <Route path="movies/:type" element={<MoviesList/>}></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
       </div>
   </Router>
   
    </div>
  )
}
