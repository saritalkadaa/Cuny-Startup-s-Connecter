import { USER_LOGIN, SHOW_MATCH_PROFILE } from "../constants/action-types";

export function addEmail(payload) {          // uses the reducer takes in user_login and performs action through 'payload'
    return { type: USER_LOGIN, payload }
};

export function showMatchnProfile(payload){  // users the reducer to take in show_match_profile and perform an action, which in this case is to make the "profile" tab show up in the navbar
    return { type: SHOW_MATCH_PROFILE, payload }
}


// export function getData() {     //this section of code is for the database, which is to be dealt with later
//     return function (dispatch) {
//         return fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({ type: "DATA_LOADED", payload: json });
//             });
//     };
// }

