import styled from 'styled-components';
import MovieListContent from './Content/Content';
import MovieListSidebar from './Sidebar/Sidebar';
import MovieListTitle from './Title/Title';

function MovieList() {
    return (
        <>
            <MovieListTitle />
            <S.Container>
                <MovieListSidebar />
                <MovieListContent />
            </S.Container>
        </>
    );
}
export default MovieList;

const Container = styled.div`
    display: flex;
`;
const S = {
    Container,
};
