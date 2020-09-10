import {FETCH_FILMS, FETCH_FILMS_ERROR, FETCH_FILMS_SUCCESS} from '../actions/ghibliActions'

const initialState = {
    films: [],
    loadingFilms: true,
    errorMessage: ""
}

export const ghibliReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_FILMS:
            return {
                ...state,
                loadingFilms: true
            }

        case FETCH_FILMS_SUCCESS:
            return{
                ...state,
                films: action.payload,
                loadingFilms: false
            }
        case FETCH_FILMS_ERROR:
            return {
                ...state,
                loadingFilms: false,
                errorMessage: action.payload.message
            }
        
        

        default:
            return state;
    }
}