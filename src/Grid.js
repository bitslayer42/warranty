import React, { Component } from 'react';
import './Grid.css';
import Warranties from './Warranties';

// Warranties: [ [Class, Term, Plan, Ded, ProdId, WooId, ProdIdS, WooIdS, Amt,  MSRP, ProdSel, WooSel, AmtSel, MSRPSel] ] (WooID=variation)
//             [ [A,     5/50, PCP,  100, XXX,    X45,   XXY,     X46,    1000, 2000, XXY,     X45,    1000,   1150   ] ]
//             [ [0      1     2     3    4       5      6        7       8     9     10       11      12      13     ] ]
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Warranties: Warranties, 
      ChosenWarranties: [],
      None: false
    };
    this.openModal = this.openModal.bind(this);
  }    
///////////////////////////////////////////////////////////////
  static getDerivedStateFromProps(nextProps, prevState){
    // const price = nextProps.sorn==="s"
    //               ? warranty[8]
    //               : warranty[8] + 150;
    let nextWar = prevState.Warranties
    .filter(warranty=> warranty[0]===nextProps.vclass)
    .filter(warranty=> warranty[2]===nextProps.plan)
    .filter(warranty=> warranty[3]===nextProps.deductible)
    .filter(warranty=> !(nextProps.gord==="d" && (warranty[2]==="MCU" || warranty[2]==="LP")));  //diesels no MCU/LP

    if(nextProps.sorn==="s"){ //add 150 surcharge
      nextWar = nextWar.reduce((acc,eachrow)=>{
          eachrow[10] = eachrow[6];  //ProdSel = ProdIdS
          eachrow[11] = eachrow[7];  //WooSel  = WooIdS
          eachrow[12] = parseInt(eachrow[8],10) + 150; //AmtSel
          eachrow[13] = parseInt(eachrow[9],10) + 150;  //MSRPSel
          acc.push(eachrow);
          return acc;
      },[]);
    }else{ //no surcharge
      nextWar = nextWar.reduce((acc,eachrow)=>{
        eachrow[10] = eachrow[4];  //ProdSel = ProdId
        eachrow[11] = eachrow[5];  //WooSel  = WooId
        eachrow[12] = eachrow[8];  //AmtSel
        eachrow[13] = eachrow[9];  //MSRPSel
        acc.push(eachrow);
        return acc;
    },[]);    
    }

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
///////////////////////////////////////////////////////////////
  displayTerm(term){
    return term.replace('LMCC','Lifetime Maximum Care / Cost')
                .replace('UMC', 'Unlimited Miles / Cost')
                .replace('/', ' Years / ')
                .replace('K', ',000 Miles')
  }
///////////////////////////////////////////////////////////////
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
    + "&variation_id=" + warranty[11] 
    + "&add-to-cart=" + warranty[10];
  }
///////////////////////////////////////////////////////////////
openModal(warranty){
  this.props.openModal(warranty[2]); //(this.props.plan);
}
///////////////////////////////////////////////////////////////
  render() { 
    const ret = this.state.None
    ? <div style={{marginBottom:"20px"}}>No plans available for this selection.</div>
    : ( 
      <div style={{margin:"20px"}}>
        <div colSpan="2" style={{width:"100%",textAlign:"right",color:"red"}}>Buy it now!</div>
        <table className="gridtable"><tbody>
          {this.state.ChosenWarranties
            .map((warranty,ix)=>{
                if(warranty[8]!=="0"){  //[8] is the original amount before surcharge, if zero, not available
                return (
                  <tr key={ix} className="gridtr">
                  <td>
                    <div>
                    {this.displayTerm(warranty[1])} 
                    </div>
                    <span className="whypay">${warranty[13]}</span>
                    <span className="yourprice">${warranty[12]}</span>
                  </td>
                  <td>
                    <a href={this.buildURL(warranty)} ><button type="button" className="cartbutton">Add to Cart</button></a>
                    <div>
                    <div className="moreinfo" onClick={()=>this.openModal(warranty)}>More Info ></div> 
                    </div>
                   </td></tr>)
                }else{   
                  return (
                    <tr key={ix} className="blanktr">
                    <td>
                    <div>
                      {this.displayTerm(warranty[1])} 
                      </div>
                      <span>&nbsp;</span>
                      <span>&nbsp;</span>                    
                    </td>
                    <td>
                    <button type="button" className="cartbutton">N/A</button>
                      <div>
                      <div>&nbsp;</div> 
                      </div>                    
                      
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
