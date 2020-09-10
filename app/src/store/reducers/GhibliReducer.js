import {FETCH_FILMS} from '../actions/ghibliActions'

const initialState = {
    films: []
}

export const ghibliReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_FILMS:
            return{
                ...state,
            }
        
        

        default:
            return state;
    }
}