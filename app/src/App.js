import React, {useEffect} from 'react';
import './App.css';

import Films from './components/Films'
import {connect} from 'react-redux'
import { fetchFilms } from './store/actions/ghibliActions';


function App({fetchFilms}) {

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms])

  return (
    <div className="App">
      <p>Studio Ghibli film list</p>
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
  {fetchFilms}
  ) (App);
