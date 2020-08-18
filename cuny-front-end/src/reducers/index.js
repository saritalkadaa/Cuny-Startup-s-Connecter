import { USER_LOGIN, SHOW_MATCH_PROFILE } from "../constants/action-types";

const initialState = {  //sets initial state of store to have following variables
  email: '',
  password: '',
  isActive: false
};

function rootReducer(state = initialState, action) { 

  if (action.type === USER_LOGIN) { //checks if action type matches our variables 
    return Object.assign({}, state, { //returns the next state with what the variable is set to be 
      email: state.email.concat(action.payload) //takes line in state and adds it to the email variable
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }


  if (action.type === SHOW_MATCH_PROFILE) {
    return Object.assign({}, state, {
      isActive: true
    })
  }


  return state;
}

export default rootReducer;
