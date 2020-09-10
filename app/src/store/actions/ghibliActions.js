import axios from "axios"

//action types
export const FETCH_FILMS = "FETCH_FILMS"
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS"
export const FETCH_FILMS_ERROR = "FETCH_FILMS_ERROR"

//action creators
export const fetchFilms = () => {
    return (dispatch) => {
        dispatch ({ type: FETCH_FILMS})
        axios
         .get("https://ghibliapi.herokuapp.com/films")
         .then((response) => {
         console.log(response)
            dispatch({ type: FETCH_FILMS_SUCCESS, payload: response.data });
          })
      
          .catch((error) => {
        dispatch({
          type: FETCH_FILMS_ERROR,
          payload: { message: "Whoops! Can't get your cat facts for you!" }
        });
      });
  };
};
    

