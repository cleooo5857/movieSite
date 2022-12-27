import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieApi from "../../apis/movieApi";
import MovieListContent from "./Content/Content";
import MovieListSidebar from "./Sidebar/Sidebar";
import MovieListTitle from "./Title/Title";

function MovieList() {
   const [movieList, setMovieList] = useState();


   useEffect(() => {
      // query 스트링 형식으로 보내진다 ?
      MovieApi.getPopluarMovies({params : {page:1,language: 'ko-KO'} })
      .then((res) => {
         setMovieList(res.data.results);
      }).catch((err) => {
         console.error(err);
      })
   },[])
console.log(movieList);
   return (
   <>
      <MovieListTitle/>
      <Container>
         <MovieListSidebar/>
         <MovieListContent movieList={movieList}/>
      </Container>
   </>

   ) 
}

export default MovieList;

const Container = styled.div`
   display: flex;
`

const S ={
   Container
}