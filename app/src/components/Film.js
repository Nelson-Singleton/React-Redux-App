import React from 'react'
import { connect } from 'react-redux'

const Film = (props) => {
    return(
        <div>I'm a film!</div>
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