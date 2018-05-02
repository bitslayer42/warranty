import { connect } from 'react-redux'
import Modal from './Modal';

function SetModal() {
  return { type: 'SETMODAL', whichModal:'' }
}

const mapStateToProps = (state, ownProps) => ({ 
  show: state.modal,
  ownProps
})

const mapDispatchToProps = {
  onClose: SetModal
}

const ModalContainer = connect(
  mapStateToProps,    //Modal prop: deductible
  mapDispatchToProps  //Modal prop: handleChangeDed
)(Modal)

export default ModalContainer;
