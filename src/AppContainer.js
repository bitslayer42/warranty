import { connect } from 'react-redux'
import App from './App';

function changeDed(event) {
  const ded = event.target.value;
  return { type: 'SETDED', ded }
}

function openModal(whichModal) {
  return { type: 'SETMODAL', whichModal }
}

const mapStateToProps = (state, ownProps) => ({ 
  deductible: state.deductible,
  ownProps
})

const mapDispatchToProps = {
  handleChangeDed: changeDed,
  handleOpenModal: openModal
}

const AppContainer = connect(
  mapStateToProps,    //App prop: deductible
  mapDispatchToProps  //App prop: handleChangeDed
)(App)

export default AppContainer;
