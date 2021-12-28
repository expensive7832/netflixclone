import {useState, useEffect} from 'react'
import axios from "../axios"
import "./Row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({title, fetchUrl, isLarge}) => {

    const [trailer, settrailer] = useState("");

    const watchVid = (movies) => {
        if(trailer){
            settrailer("");
        }else{
            movieTrailer(movies?.name || movies?.title || "" )
            .then((url) => {
                const urlSearch = new URLSearchParams(new URL(url).search);
               const youtubeID = urlSearch.get("v");
                settrailer(youtubeID);
            }).catch((e) =>{
                alert(e)
            })
        }
    }

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

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };


    return (
        <div className="bg-dark text-white">
            <div className="d-flex flex-column align-items-center">
                <h3 className="align-self-start title py-2">{title}</h3>
                <div data-aos="zoom-up" data-aos-duration="2000" className="poster_image d-flex align-items-center">
                {Movie.map((movies, index) => {
                   return  <img onClick={() => watchVid(movies)} key={index} src={`${baseImageUrl}${isLarge ? movies.poster_path : movies.backdrop_path}`} loading="lazy" alt={movies.name || movies.title } className={isLarge && "large_img" } />
                })}
                </div>
            </div>
            <YouTube videoId={trailer} opts={opts}  />
        </div>
        
    )
}

export default Row
