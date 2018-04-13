import React from 'react';
import SelDed from './SelDed';
import Grid from './Grid';
import './App.css';

const App = ({ deductible, plan, handleChangeDed }) => {
  let vclass = window.location.search.slice(-3)[0];  //3rd from last char of url: veh class (a,b,c)
  let gord = window.location.search.slice(-1);  //last char of url: gas or diesel (g or d)
  return(
    <div>
    <SelDed deductible={deductible} plan={plan} handleChange={handleChangeDed} />
    <Grid deductible={deductible} plan={plan} vclass={vclass} gord={gord} />
    </div>
  )
}

export default App;
