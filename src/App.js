import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Row from "./component/Row";
import request from "./request"
import "./style.css"

function App() {

  
  return (
    <div>
      <Header/>
      <Hero />
      <Row title="Trending" fetchUrl={request.fetchTrending} isLarge/>
      <Row title="Romantic" fetchUrl={request.fetchRomanceMovies}/>
    </div>
  );
  

}

export default App;
