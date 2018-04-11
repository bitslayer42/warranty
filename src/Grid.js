import React, { Component } from 'react';
import './Grid.css';
// import warranty from './warranty';

class Grid extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     class: 'a',
  //     deductible: '100'
  //   };
  // }  
  // getDerivedStateFromProps(nextProps, prevState){

  // }

  render() { 
    return (
      <div style={{margin:"20px"}}>
        <table><tbody>
          <tr>
            <td>
              {this.props.plan} 
            </td><td>
              {this.props.class}
            </td><td>
              {this.props.deductible}
            </td>
          </tr>
        </tbody></table>
      </div>
    );
  }
}

export default Grid;
