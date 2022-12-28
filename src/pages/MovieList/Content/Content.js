import React, { useEffect } from 'react';
import styled from 'styled-components';
import MovieCard from '../../../components/Card/Card';
import usePopularMovieQuery from '../../../queries/usePopularMovieQuery';
import { useInView } from 'react-intersection-observer';

function MovieListContent() {
    const { data: movieList, fetchNextPage, isFetching } = usePopularMovieQuery();
    const [ref, inView] = useInView();
    // ref = useRef // html 요소 선택
    // inView // 감지 됨에 따라 변화되는 옵션 값
   console.log(isFetching);
    useEffect(() => {
      // 서버 요청시 취소됐을때
        if (!inView || isFetching) return;
        fetchNextPage();
    }, [inView]);

    // reqct-qurey 안썼을 때
    /* 
    const [page, setPage] = useState(1);
    useEffect(()=>{
        if(!inview) return;
        if(!page >= 5) return;
        setPage((prev) => prev + 1)
    },[inView])

    useEffect(()=>{
        MovieApi.getPopularMovieList({params: { page }).then(res => concat)
    },[page])
    */

    /* 중요 에러바인드
    react18
    react susspense == lazy loading 
    react error boundary == err handler == custom err
    sentry 
    */

    return (
        <S.Wrapper>
            <S.Container>
                {movieList &&
                    movieList.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page.data.results.map((movie, index) => (
                                <MovieCard movie={movie} key={index} />
                            ))}
                        </React.Fragment>
                    ))}
                <div ref={ref} />
            </S.Container>
        </S.Wrapper>
    );
}
export default MovieListContent;

const Wrapper = styled.div`
    min-height: 100vh;
    width: calc(100% - 340px);
    display: flex;
    justify-content: center;
    padding: 0 64px;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const S = {
    Wrapper,
    Container,
};
