
import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";
function App() {
  // http://www.omdbapi.com/?i=tt3896198&apikey=189e8aad
  return (
    <>
        <Router>
              <Header/>
                <div className="mx-8">
                  <Routes>
                        <Route path="/" element={<Home/>}/>  
                        <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
                        <Route path="/*" element={<PageNotFound/>}/>
                  </Routes>
                </div>
            < Footer />
        </Router> 
    </>   
  );
}

export default App;
