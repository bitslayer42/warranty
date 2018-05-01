import React from 'react';
import SelDed from './SelDed';
import Grid from './Grid';
import Modal from './Modal';
import './App.css';

const App = ({ deductible, modal, plan, handleChangeDed, handleToggleModal }) => {
  let vclass = window.location.search.slice(-5)[0];  //5th from last char of url: veh class (a,b,c)
  let gord = window.location.search.slice(-3)[0];  //3rd from last char of url: gas or diesel (g or d)
  let sorn = window.location.search.slice(-1);  //last char of url: surcharge or none (s or n)
  return(
    <div>
    <SelDed deductible={deductible} plan={plan} handleChange={handleChangeDed} />
    <Grid deductible={deductible} plan={plan} vclass={vclass} gord={gord} sorn={sorn}  openModal={handleToggleModal} />
    <Modal show={modal} onClose={handleToggleModal}/>
    </div>
  )
}

export default App;
