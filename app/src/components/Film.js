import React from 'react'
import { connect } from 'react-redux'

const Film = (props) => {
    return(
        <div>
            {props.someFilm.title}
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