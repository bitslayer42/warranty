import { connect } from 'react-redux'
import App from './App';

function changeDed(event) {
  const ded = event.target.value;
  return { type: 'SETDED', ded }
}

function toggleModal(event) {

  return { type: 'TOGGLEMODAL' }
}

const mapStateToProps = (state, ownProps) => ({ 
  deductible: state.deductible,
  modal: state.modal,
  ownProps
})

const mapDispatchToProps = {
  handleChangeDed: changeDed,
  handleToggleModal: toggleModal
}

const AppContainer = connect(
  mapStateToProps,    //App prop: deductible
  mapDispatchToProps  //App prop: handleChangeDed
)(App)

export default AppContainer;
