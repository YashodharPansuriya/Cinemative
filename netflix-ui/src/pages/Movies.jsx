import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, fetchMovies } from "../store";
import Slider from "../components/Slider";
import NotAvailabe from "../components/NotAvailable";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import SelectGenre from "../components/SelectGenre";
 

export default function Movies() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies)
  const genres = useSelector((state) => state.netflix.genres)


  useEffect(() => {
    dispatch(getGenres());
     // eslint-disable-next-line 
  }, [])

  useEffect(()=> {
    if(genresLoaded) dispatch(fetchMovies({type:"movies"}))
  }, [])

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  onAuthStateChanged(firebaseAuth, (currentUser)=> {
   
  });
  

  return(
    <Container>
        <div className="navbar">
            <Navbar isScrolled={isScrolled}/>
        </div>
        <div className="data">
        <SelectGenre genres={genres} type="movie" />
            {
                movies.length ? <Slider movies = {movies}/> : <NotAvailabe />
            }
        </div>
    </Container>
  )
}

const Container = styled.div`
.data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;