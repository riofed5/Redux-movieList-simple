import { combineReducers } from 'redux';

const movieListReducer = ()=>{
    return [
        {title: 'The Walking Dead', releaseDate:'07-08-2013', rating: 7.4},
        {title: 'Prison Break', releaseDate:'12-03-2010', rating: 7.4},
        {title: 'Breaking Bad', releaseDate:'07-05-2013', rating: 7.4},
        {title: 'Black Panther', releaseDate:'07-01-2017', rating: 7.4},
        {title: 'Iron Man', releaseDate:'10-08-2018', rating: 8.5},
    ]
}

const selectedMovieReducer=(state= null, action )=>{
    switch (action.type){
        case 'MOVIE_SELECTED':
            return action.payload;
        default: 
            return state;
    }
}

export default combineReducers({
    movies: movieListReducer,
    selectedMovie: selectedMovieReducer,
});