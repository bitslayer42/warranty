
import React from 'react';

class ModalContent extends React.Component {
  render() {
    if(this.props.show==='PCP') {
      return(
        <div className="modal">
            <h1>Powertrain Care Plus</h1>
            <div>Powertrain Care is for owners who need the extra coverage and plan benefits beyond their 3/36 Basic or 5/100 Powertrain Warranty.</div>
            <h2>Covers 400+ Components</h2>
            <ul>
            <li>Engine</li>
            <li>Transmission</li>
            <li>Front Wheel Drive</li>
            <li>Rear Wheel Drive</li>
            <li>All Wheel Drive</li>
            <li>Steering</li>
            <li>Air Conditioning</li>
            </ul>
            Refer to Brochure for a complete list
            <h2>Features and Benefits</h2>
            <ul>
            <li>First Day Rental</li>
            <li>Car Rental Allowance</li>
            <li>100 Dollar Towing / Roadside Assistance</li>
            <li>1000 Dollar Trip Interruption Protection</li>
            <li>Mopar Geniune Parts Replacement</li>
            </ul> 
        </div>)
    }else if(this.props.show==='ACP') {
        return(
            <div>
                <h1>Added Care Plus</h1>
                <div>Added Care Plus is for owners that want to secure coverage for additional costly repair components.</div>
                <h2>Covers 850+ Components</h2>
                <ul>
                <li>All 400+ Power Train Components</li>
                <li>Engine Cooling and Fuel</li>
                <li>Air-conditioning</li>
                <li>Brakes</li>
                <li>Anti-Lock Brakes (ABS)</li>
                <li>Front Suspension</li>
                <li>Rear Suspension</li>
                <li>Electrical</li>
                <li>Instrumentation</li>
                <li>Power Group</li>
                <li>Luxury Group</li>
                <li>Mopar Accessories</li>
                <li>Power Sunroof Motor</li>
                </ul>
                Refer to Brochure for a complete list
                <h2>Features and Benefits</h2>
                <ul>
                <li>First Day Rental</li>
                <li>Car Rental Allowance</li>
                <li>100 Dollar Towing / Roadside Assistance</li>
                <li>1000 Dollar Trip Interruption Protection</li>
                <li>Mopar Geniune Parts Replacement</li>
                </ul>                 
            </div>)
    }else if(this.props.show==='MC') {
      return(
        <div>
            <h1>Maximum Care</h1>
            <div>The smart choice for owners that want peace of mind that when you take your vehicle in for any mechanical repair, it will be covered.</div>
            <h2>Covers 5000+ Components</h2>
                <ul>
                <li>All 850+ Added Care components</li>
                <li>Emissions</li>
                <li>Driveline</li>
                <li>Body Mechanisms</li>
                <li>Safety and Security</li>
                <li>Navigation</li>
                <li>Backup Camera</li>
                <li>Power Liftgate</li>
                <li>Power Sliding Doors</li>
                <li>Heated Seats and Steering Wheel</li>
                </ul>
                Refer to Brochure for a complete list
                <h2>Features and Benefits</h2>
                <ul>
                <li>First Day Rental</li>
                <li>Car Rental Allowance</li>
                <li>100 Dollar Towing / Roadside Assistance</li>
                <li>1000 Dollar Trip Interruption Protection</li>
                <li>Mopar Geniune Parts Replacement</li>
                </ul>             
        </div>)
    }else if(this.props.show==='MCU') {
      return(
        <div>
            <h1>Maximum Care Unlimited</h1>
            <div>The smart choice for owners who drive a lot of miles every year, and want the full coverage of Maximum Care.</div>
            <h2>Covers 5000+ Components</h2>
                <ul>
                <li>All 850+ Added Care components</li>
                <li>Emissions</li>
                <li>Driveline</li>
                <li>Body Mechanisms</li>
                <li>Safety and Security</li>
                <li>Navigation</li>
                <li>Backup Camera</li>
                <li>Power Liftgate</li>
                <li>Power Sliding Doors</li>
                <li>Heated Seats and Steering Wheel</li>
                </ul>
                Refer to Brochure for a complete list
                <h2>Features and Benefits</h2>
                <ul>
                <li>First Day Rental</li>
                <li>Car Rental Allowance</li>
                <li>100 Dollar Towing / Roadside Assistance</li>
                <li>1000 Dollar Trip Interruption Protection</li>
                <li>Mopar Geniune Parts Replacement</li>
                </ul> 
        </div>)
    }else if(this.props.show==='LP') {
      return(
        <div>
            <h1>Lifetime Plans</h1>
            <div>If you want to protect your vehicle for life, the lifetime plan is the best choice. This plan never expires based on years owned or miles driven.</div>
            <h2>Covers 5000+ Components</h2>
                <ul>
                <li>All 850+ Added Care components</li>
                <li>Emissions</li>
                <li>Driveline</li>
                <li>Body Mechanisms</li>
                <li>Safety and Security</li>
                <li>Navigation</li>
                <li>Backup Camera</li>
                <li>Power Liftgate</li>
                <li>Power Sliding Doors</li>
                <li>Heated Seats and Steering Wheel</li>
                </ul>
                Refer to Brochure for a complete list
                <h2>Features and Benefits</h2>
                <ul>
                <li>First Day Rental</li>
                <li>Car Rental Allowance</li>
                <li>100 Dollar Towing / Roadside Assistance</li>
                <li>1000 Dollar Trip Interruption Protection</li>
                <li>Mopar Geniune Parts Replacement</li>
                </ul> 
        </div>)
    }
}
}
export default ModalContent;
