import { createStore } from 'redux'
import datafirebase from '../firebaseConnect';

const nameInitialState ={
  idItem:null
}

const listTodoReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      datafirebase.push(action.data)
      return state
    case 'REMOVE_TO_DO':
      console.log();    
      datafirebase.child(action.id_item).remove()
      return state
    default:
      return state
  }
}

const store = createStore(listTodoReducer)
// store.subscribe(function(){
//     console.log(store.getState()); 
// })
export default store;
// [ 'Use Redux', 'Read the docs' ]