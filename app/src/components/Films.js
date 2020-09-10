import React from 'react'
import {connect} from 'react-redux' 
import Film from './Film'


const Films = props => {
    console.log(props.films)
    return (
        <div><p>This maps films</p>
        {props.films.map(someFilm => (
            <Film key = {someFilm.id} someFilm = {someFilm} />
        ))}
            {/* <Film /> */}
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
    ) (Films);