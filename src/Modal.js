import React from 'react';
import ModalContent from './ModalContent';

class Modal extends React.Component {
  dontClose = (e)=>{e.stopPropagation()};
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
      paddingTop: 50
    };
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
      position:'relative',
      maxHeight: 'calc(100vh - 210px)',
      overflowY: 'auto'
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
      <div className="backdrop" style={backdropStyle} onClick={this.props.onClose}>
        <div className="modal" style={modalStyle}  onClick={this.dontClose}>
          <ModalContent show={this.props.show}/>

          <div className="footer" onClick={this.props.onClose} style={closeStyle}>
              Close
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;