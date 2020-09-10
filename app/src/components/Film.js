import React from 'react'
import { connect } from 'react-redux'

const Film = (props) => {
    return(
        <div className = "Filmcard">
            <h3 className = "Titleh3">Title: {props.someFilm.title}</h3>
            <h3>Released: {props.someFilm.release_date}</h3>
            <h3>Director: {props.someFilm.director}</h3>
            <h3>Rating: {props.someFilm.rt_score}</h3>
        </div>
    )
}

const mapStateToProps = state => { 
    return { 
      films: state.films
    }} 
  
  export default connect(
    mapStateToProps,
    {}
    ) (Film);