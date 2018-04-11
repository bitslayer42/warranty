import React, { Component } from 'react';
import './Grid.css';
import Warranties from './Warranties';
// Warranties: [ [Class, Term, Plan, Ded, WooId, Amt,  MSRP ] ]
//             [ [A,     5/50, PCP,  100, X45,   1000, 2000 ] ]

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Warranties: Warranties,
      
    };
  }    

  static getDerivedStateFromProps(nextProps, prevState){
    return prevState;
  }

  render() { 
    return (
      <div style={{margin:"20px"}}>
        <table><tbody>
          {this.state.Warranties
          .filter(warranty=> warranty[0]===this.props.vclass)
          .filter(warranty=> warranty[2]===this.props.plan)
          .filter(warranty=> warranty[3]===this.props.deductible)
          .map((warranty,ix)=>(
              <tr key={ix}><td>
                {warranty[1]} 
              </td><td style={{textAlign:"right"}}>
                <a href={"http://wax9.com/example/"+warranty[4]} ><button type="button">${warranty[6]}</button></a>
              </td></tr>
            )          
          )}
        </tbody></table>
      </div>
    );
  }
}

export default Grid;
