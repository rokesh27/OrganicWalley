
import * as actionTypes from './actionTypes'
export const loginSuccess=(emailValue,UserName)=>{
    return{
        type:actionTypes.loginSuccess,
        payload:{
            email:emailValue,
            Uname:UserName,
        }
    }
}