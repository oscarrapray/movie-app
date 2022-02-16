import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Header } from './Header'
import { Movie } from './Movie'
import { Search } from './Search'

export const MovieList = () =>{
const[search, setSearch] = useState('dragon ball')
const[movielist, setMovielist] = useState([])
/*const[movieselect, setMovieselect] = useState("")*/

const consultarApi = async () =>{
    if(search === '' ) return;

    const resp = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=3761bc6e`)
    setMovielist(resp.data.Search)
    setMovielist(resp.data.Search)
    console.log(resp.data.Search)
}
 useEffect(()=>{
     consultarApi()
 },[search])

    return(
        <>
        <Header />
        <div className="container">
          <div className="l-container">
              <Search setSearch = {setSearch}/>
              <div className="container-card">
                  {movielist.length===0?(
                      <h2>Cargando ...</h2>
                  ):(
                        movielist.map( mov =>(
                          <Movie 
                          key = {mov.imdbID}
                          mov ={mov}
                          />
                        ))
                  )}
              </div>
         </div>
       </div>
        </>
    )
}