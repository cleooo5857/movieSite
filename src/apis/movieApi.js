import Axios from "./@core";

const IMAGE_SIZE_PATH = '/550';
const PATH = '/movie';

const MovieApi = {
   getPopluarMovies({params}) {
      console.log(params);
      return Axios.get(PATH + '/popular', {params})
   },
   getSerachMovies({params}) {
      return Axios.get('/search/movie',{params});
   },
   getNowPlayinMovies({params}) {
      return Axios.get(PATH + '/now_palying',{params});
   },
   getUpcomingMovies({params}) {
      return Axios.get(PATH + '/upcoming',{params});
   },
   getTopRatedMovies({params}) {
      return Axios.get(PATH + 'top_rated',{params})
   },
}

export default MovieApi;