import React from 'react'
import {connect} from 'react-redux' 
import Film from './Film'

const Films = props => {
    return (
        <div><p>This maps films</p>
            <Film />
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