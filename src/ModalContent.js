
import React from 'react';

class ModalContent extends React.Component {
  render() {
    if(this.props.show==='PCP') {
      return(
        <div>
            <h1>Powertrain Care Plus</h1>
            <div>
            Powertrain Care is for owners who need the extra coverage and plan benefits beyond their 3/36 Basic or 5/100 Powertrain Warranty.
            </div>
        </div>)
    }else if(this.props.show==='ACP') {
        return(
            <div>
                <h1>Added Care Plus</h1>
                <div>
                Added Care Plus is for owners that want to secure coverage for additional costly repair components.
                </div>
            </div>)
    }else if(this.props.show==='MC') {
      return(
        <div>
            <h1>Maximum Care</h1>
            The smart choice for owners that want peace of mind that when you take your vehicle in for any mechanical repair, it will be covered.
        </div>)
    }else if(this.props.show==='MCU') {
      return(
        <div>
            <h1>Maximum Care Unlimited</h1>
            The smart choice for owners who drive a lot of miles every year, and want the full coverage of Maximum Care.
        </div>)
    }else if(this.props.show==='LP') {
      return(
        <div>
            <h1>Lifetime Plans</h1>
            If you want to protect your vehicle for life, the lifetime plan is the best choice. This plan never expires based on years owned or miles driven.
        </div>)
    }
}
}
export default ModalContent;
