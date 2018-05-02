import { combineReducers } from 'redux'

const deductible = (state = "100", action) => { //console.log('in Reducer',action);
  switch (action.type) {
    case 'SETDED':
      return action.ded       
    default:
      return state;
  }
}

const modal = (state = '', action) => { //console.log('in Reducer',action);
  switch (action.type) {
    case 'SETMODAL':
      return action.whichModal
                
    default:
      return state;
  }
}

const Reducer = combineReducers({
  deductible,
  modal
})
export default Reducer;