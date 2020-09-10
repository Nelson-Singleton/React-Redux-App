import React from 'react';
import './App.css';

import Films from './components/Films'
import {connect} from 'react-redux'

function App() {
  return (
    <div className="App">
      <Films />
      
    </div>
  );
}

const mapStateToProps = state => { 
  return { 
    films: state.films
  }} 

export default connect(
  mapStateToProps,
  {}
  ) (App);
