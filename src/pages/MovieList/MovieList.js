import styled from "styled-components";
import MovieListContent from "./Content/Content";
import MovieListSidebar from "./Sidebar/Sidebar";
import MovieListTitle from "./Title/Title";

function MovieList() {
   return (
   
   <>
      <MovieListTitle/>
      <Container>
         <MovieListSidebar/>
         <MovieListContent/>
      </Container>
   </>

   ) 
}

export default MovieList;

const Container = styled.div`
   display: flex;
   min-height: 100vh;
   max-width: 100vh;
`

const S ={
   Container
}