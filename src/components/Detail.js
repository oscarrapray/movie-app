import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link,useParams } from "react-router-dom";

export const Detail = () =>{
  const[info,setInfo] = useState({})
  const params = useParams()
    let dato = params.imdbID

    const url = `https://www.omdbapi.com/?i=${dato}&apikey=3761bc6e`

    const consultarApi = async() =>{
        const resp = await axios.get(url)
        setInfo(resp.data)
    }

    useEffect(()=>{
      consultarApi()
    },[dato])
    return(
        <div className="detalle-info">
            {info ? (
            <>
            <img src={info.Poster} alt={info.Title} className="detalle-img"/>
            <div className="detalle-txt">
                  <p className="info-title">{info.Type} <span>{info.Title}</span></p>
                  <p className="info-title">IMDB Rating: <span>{info.imdbRating}</span></p>
                  <p className="info-title">Year: <span>{info.Year}</span></p>
                  <p className="info-title">Language: <span>{info.Language}</span></p>
                  <p className="info-title">Released: <span>{info.Released}</span></p>
                  <p className="info-title">Runtime: <span>{info.Runtime}</span></p>
                  <p className="info-title">Director: <span>{info.Director}</span></p>
                  <p className="info-title">Actors: <span>{info.Actors}</span></p>
                  <p className="info-title"> Plot: <span>{info.Director}</span></p>

                  <Link to={'/'} className="link-home"> Regresar </Link>
            </div>
            </>
            ):
            (
              <p>"Carghando..."</p>
            )}
          </div>
    )
}