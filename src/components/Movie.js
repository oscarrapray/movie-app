import React from 'react'
import {Link} from 'react-router-dom'

export const Movie = ({mov}) =>{
  const {Title,Poster,Type,Year,imdbID} = mov
    return(
        <div className="card">
                <div className="card-img">
                  <img src={Poster} alt="una imagen"/>
                </div>
                  <div className="movie-name">
                   <Link to = {`/${imdbID}`}><span >{Title}</span></Link> 
                  </div>
                  <div className="info-movie">
                    <span >Year : {Year}</span>
                    <span >Type : {Type}</span>
                  </div>
        </div>
    )
}