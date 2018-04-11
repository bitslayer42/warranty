// import { combineReducers } from 'redux'

// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// })

const Reducer = (state = {deductible: "100"}, action) => { //console.log('in Reducer',action);
  switch (action.type) {
    case 'SETDED':
      return (
        {
          deductible: action.ded
        })
      
    default:
      return state;
  }
}

//  { deductible: '100' } 

export default Reducer;