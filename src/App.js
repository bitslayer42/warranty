import React from 'react';
import SelDed from './SelDed';
import Grid from './Grid';
import './App.css';

const App = ({ deductible, plan, handleChangeDed }) => {
  let vclass = window.location.search.slice(-1);  //last char of url is veh class (a,b,c)
  return(
    <div>
    <SelDed deductible={deductible} plan={plan} handleChange={handleChangeDed} />
    <Grid deductible={deductible} plan={plan} vclass={vclass} />
    </div>
  )
}

export default App;
