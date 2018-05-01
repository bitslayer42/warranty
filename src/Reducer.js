// import { combineReducers } from 'redux'

// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// })

const Reducer = (state = {deductible: "100", modal: false}, action) => { //console.log('in Reducer',action);
  switch (action.type) {
    case 'SETDED':
      return (
        {
          deductible: action.ded,
          ...state
        })
        case 'TOGGLEMODAL':
        return (
          {
            modal: !state.modal,
            ...state
          })
                
    default:
      return state;
  }
}

//  { deductible: '100' } 

export default Reducer;