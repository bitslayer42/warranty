import React from 'react';
import ModalContent from './ModalContent';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is empty
    if(this.props.show==='') {
      return null;
    }
    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      //minHeight: 300,
      margin: '0 auto',
      padding: 30,
      position: 'relative'
    };
    const closeStyle = {
      position: "absolute",
      right:10,
      top:10,
      color: 'blue',
      textDecoration: 'underline',
      cursor: 'pointer'
      
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <ModalContent show={this.props.show} />

          <div className="footer" onClick={this.props.onClose} style={closeStyle}>
              Close
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;