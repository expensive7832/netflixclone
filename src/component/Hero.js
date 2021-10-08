import {useState, useEffect} from "react";
import axios from "../axios";
import request from "../request";


function Hero() {

    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        const getRandomMovie = async () => {
            const res = await axios.get(request.fetchSciFi);
               setMovies(
                 res.data.results[Math.floor(Math.random() * res.data.results.length -1)]
               );
            return res;
        }
        getRandomMovie();
    }, []);

    console.log(Movies);
    const baseImageUrl = "https://image.tmdb.org/t/p/original/";

    const heroStyling = {
        backgroundImage: `url(${baseImageUrl}${Movies.poster_path})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "whitesmoke",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        height: "80vh"
    }
    return (
        <div>
            <section className="container-fluid hero" style={heroStyling}>
                <div className="row">
                    <div className="col-12 col-md-6 text-center" style={{paddingTop: "7rem"}}>
                        <h2 className="display-6 fw-bold  text-white">{Movies?.name || Movies.title}</h2>
                        <div className="mt-3">
                            <button className="btn btn-primary text-white mx-3">Watch Now</button>
                            <button className="btn text-white btn-warning mx-3">Save For later</button>
                        </div>
                        <p className="pt-3 text-white d-inline-block">{Movies?.overview}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Hero
