import { useState } from "react"
import styled from "styled-components"
import MovieCard from "../../../components/Card/Card"

function MovieListContent({movieList}) {
   
   return (
      <S.Wrapper>
         <S.Container>
            {movieList && movieList.map((movie,index) => (
               <MovieCard key={index} movie={movie}/>
            ))}
         </S.Container>
      </S.Wrapper>
   )
}

export default MovieListContent

const Wrapper = styled.div`
   min-height: 100vh;
   width: calc(100% - 340px);
   display: flex;
   justify-content: center;   
   padding: 0 64px;

`
const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
`

const S = {
   Wrapper,
   Container,
}