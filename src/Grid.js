import React, { Component } from 'react';
import './Grid.css';
import Warranties from './Warranties';
// Warranties: [ [Class, Term, Plan, Ded, ProdId, WooId, Amt,  MSRP ] ] (WooID=variation)
//             [ [A,     5/50, PCP,  100, XXX,    X45,   1000, 2000 ] ]
//             [ [0      1     2     3    4       5      6     7    ] ]
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Warranties: Warranties, 
      ChosenWarranties: [],
      None: false
    };
  }    

  displayTerm(term){
    return term.replace('LMCC','Lifetime Maximum Care / Cost')
                .replace('UMC', 'Unlimited Miles / Cost')
                .replace('/', ' Years / ')
                .replace('K', ',000 Miles')
  }

  buildURL(warranty){
    let plan = warranty[2].replace("PCP","powertrain-care-plus-")
                          .replace("ACP","added-care-plus-")
                          .replace("MCU","maximum-care-unlimited-")
                          .replace("MC","maximum-care-")
                          .replace("LP","maximum-care-lifetime-");
    let term = warranty[1].replace('LMCC','lifetime-maximum-care-cost')
                          .replace('UMC', 'unlimited')
                          .replace('/', '-yr-')
                          .replace('K', 'k-miles');
    return "/product/" + plan + warranty[0] 
    + "/?attribute_pa_deductible=" + warranty[3] 
    + "&attribute_pa_term-length=" + term 
    + "&variation_id=" + warranty[5] 
    + "&add-to-cart=" + warranty[4];
  }

  static getDerivedStateFromProps(nextProps, prevState){
    let nextWar = prevState.Warranties
    .filter(warranty=> warranty[0]===nextProps.vclass)
    .filter(warranty=> warranty[2]===nextProps.plan)
    .filter(warranty=> warranty[3]===nextProps.deductible)
    .filter(warranty=> !(nextProps.gord==="d" && (warranty[2]==="MCU" || warranty[2]==="LP")));
    if(nextWar.length===0){
      return {
        None: true,
      }
    }else{
      return {
        None: false,
        ChosenWarranties: nextWar
      }
    }
  }

  render() { 
    const ret = this.state.None
    ? <div style={{marginBottom:"20px"}}>No plans available for this selection.</div>
    : ( 
      <div style={{margin:"20px"}}>
        <div colSpan="2" style={{width:"100%",textAlign:"right",color:"red"}}>Buy it now!</div>
        <table className="gridtable"><tbody>
          {this.state.ChosenWarranties
            .map((warranty,ix)=>{
                if(warranty[6]!=="0"){
                return (
                  <tr key={ix} className="gridtr">
                  <td>
                    {this.displayTerm(warranty[1])} 
                  </td>
                  <td>
                    <a href={this.buildURL(warranty)} ><button type="button" className="cartbutton">${warranty[6]}</button></a>
                   </td></tr>)
                }else{   
                // return ( <tr key={ix} className="blanktr"><td colSpan="2" ><button style={{visibility: "hidden"}} >TEXT</button></td></tr> )
                return (
                  <tr key={ix} className="blanktr">
                  <td>
                    {this.displayTerm(warranty[1])} 
                  </td>
                  <td>
                    <button type="button" className="cartbutton">N/A</button>
                   </td></tr>)
                }
              
              }          
          )}
        </tbody></table>
      </div>
    );
    return ret;
  }
}

export default Grid;
