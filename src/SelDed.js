import React, { Component } from 'react';
import './SelDed.css';
class SelDed extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() { 
    return (
      <div className="switch-field" style={{margin:"20px"}}>
        <div className="switch-title">Select Deductible $</div>
        <input type="radio"
               id={this.props.plan+"_1"} 
               name={this.props.plan+"_radioGrp"}  
               value="0" 
               checked={this.props.deductible === '0'} onChange={this.props.handleChange}/>
        <label htmlFor={this.props.plan+"_1"} >0</label>
        <input type="radio"
               id={this.props.plan+"_2"} 
               name={this.props.plan+"_radioGrp"}  
               value="100" 
               checked={this.props.deductible === '100'} onChange={this.props.handleChange}/>
        <label htmlFor={this.props.plan+"_2"} >100</label>
        <input type="radio"
               id={this.props.plan+"_3"}
               name={this.props.plan+"_radioGrp"}  
               value="200" 
               checked={this.props.deductible === '200'} onChange={this.props.handleChange}/>
        <label htmlFor={this.props.plan+"_3"} >200</label>

      </div>      
    );
  }
}

export default SelDed;
