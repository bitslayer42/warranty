import React from 'react';
import SelDed from './SelDed';
import Grid from './Grid';
import './App.css';

const App = ({ deductible, plan, handleChangeDed }) => (
  <div>
  <SelDed deductible={deductible} plan={plan} handleChange={handleChangeDed} />
  <Grid deductible={deductible} plan={plan} class={window.location.search.slice(-1)} />
  </div>
) 

export default App;
