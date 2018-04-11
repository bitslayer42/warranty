import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelDed from './SelDed';
import Grid from './Grid';
import './App.css';

function changeDed(ded) {
  return { type: 'SETDED', ded }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: this.props.plan,
      class: window.location.search.slice(-1),
      deductible: '0'
    };
		//this.handleChangeDed = this.handleChangeDed.bind(this);	
  }  

  // handleChangeDed=(event)=>{ //debugger;
  //   this.props.dispatch(changeDed(event.target.value));
  //   this.setState({deductible: event.target.value});
  // }  
    
  render() { 
    return (
      <div className="App">
          <SelDed deductible={this.props.deductible} handleChange={this.props.handleChangeDed} />
          <Grid plan={this.state.plan} class={this.state.class} deductible={this.state.deductible} />
      </div>
    );
  }
}
App = connect()(App);

export default App;
