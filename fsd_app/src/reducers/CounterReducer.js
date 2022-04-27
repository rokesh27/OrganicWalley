import users from "../adminInterface/users";

import * as actionTypes from './actionTypes'
let initialState = {
    count: 0,
    loginSuccess: false,
    user: [],
}

function CounterReducer(state = initialState, action) {
    switch (action.type) {
        
        case "loginSuccess":
           
            return {
                ...state,

                user: { email: action.payload.email, UserName: action.payload.Uname },

                loginSuccess: true,
            }
        case "loginFail":
            return {
                ...state,
                loginSuccess: false
            };
        default: return state
    }

}


export default CounterReducer;