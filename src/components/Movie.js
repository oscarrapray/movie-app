import React from 'react'

export const Movie = ({mov}) =>{
  const {Title,Poster,Type,Year} = mov
    return(
        <div className="card">
                <div className="card-img">
                  <img src={Poster} alt="una imagen"/>
                </div>
                  <div className="movie-name">
                    <span >{Title}</span>
                  </div>
                  <div className="info-movie">
                    <span >Year : {Year}</span>
                    <span >Type : {Type}</span>
                  </div>
        </div>
    )
}