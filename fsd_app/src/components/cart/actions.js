import * as actionTypes from './actionTypes'

export const addToCart=(itemId,usrDet)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{
            idV:itemId,
            userInfo:usrDet,

        }
    }
}

export const addQty=(itemId)=>{
    return{
        type:actionTypes.ADD_QTY,
        payload:{
            idV:itemId
        }
    }
}


export const subQty=(itemId)=>{
    return{
        type:actionTypes.SUB_QTY,
        payload:{
            idV:itemId
        }
    }
}
export const RemCart=(itemId)=>{
    return{
        type:actionTypes.REM_CART,
        payload:{
            idV:itemId
        }
    }
}

export const addToOrder=(itemId,usrDet)=>{
    return{
        type:actionTypes.ADD_TO_ORDER,
        payload:{
            idV:itemId,
            userInfo:usrDet,
        }
    }
}
export const Transfer =(cartVal)=>{
    return{
        type:actionTypes.transfer,
        payload:{
            cart:cartVal
        }
    }
}
