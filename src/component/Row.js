import {useState, useEffect} from 'react'
import axios from "../axios"
import "./Row.css"

const Row = ({title, fetchUrl, isLarge}) => {

    const [Movie, setMovie] = useState([]);

    useEffect(() => {
        const getMovie = async() =>{
            const res = await axios.get(fetchUrl);
            setMovie(res.data.results);
            return res;
        }
        getMovie();
    },[fetchUrl]);

    
    const baseImageUrl = "https://image.tmdb.org/t/p/original/";

    return (
        <div>
            <div className="ms-2 d-flex flex-column align-items-center">
                <h3 className="align-self-start title">{title}</h3>
                <div className="poster_image d-flex flex-row align-items-center">
                {Movie.map((movies, index) => {
                   return  <img  key={index} src={`${baseImageUrl}${isLarge ? movies.poster_path : movies.backdrop_path}`} loading="lazy" alt={movies.name || movies.title } className={isLarge && "large_img" } />
                })}
                </div>
            </div>
        </div>
    )
}

export default Row
