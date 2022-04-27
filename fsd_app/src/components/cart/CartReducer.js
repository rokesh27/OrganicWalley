import ProductData0 from '../../assets/products.json'
import * as actionTypes from './actionTypes'

// import ProductData from './ProductData'
// import axios from "axios"
// import { useState,useEffect } from 'react'
// import { getAllProducts } from '../../utils/api'
// let ProductDataI =[]
// let cc = ProductData()
// async functioncode = () => {
//     console.log("Jii")
//     let ProductData=[]
// await fetch('http://localhost:9000/api/products/').then(resp => 
//     resp.json())
//     .then( data => {ProductData = data.data
//         console.log(ProductData)})
//   console.log("Hello1")
// let fruitInfo=[]
// let vegetableInfo=[]
// let pulsesInfo=[]
// let dairyInfo =[]

// for (let index = 0; index < ProductData.length; index++) {
// const element = ProductData[index];
// switch (element.type) {
//     case "Fruit":
//         fruitInfo[fruitInfo.length]=element
//         break;
//     case "Vegetable":
//         vegetableInfo[vegetableInfo.length]=element
//         break;
//     case "Pulses":
//         pulsesInfo[pulsesInfo.length]=element
//         break;
//     case "dairy":
//         dairyInfo[dairyInfo.length]=element
//         break;        
// }};
// return [fruitInfo, vegetableInfo, dairyInfo, pulsesInfo]
// }

// const g = code()
// const Initialstate = {
//     fruits:g[0],
//     vegetables: g[1],
//     dairy: g[2],
//     pulses: g[3],
//     cart: [],
//     sellerProducts: [],
//     orders: [],
// }


let ProductData = ProductData0.products;

let fruitInfo=[]
let vegetableInfo=[]
let pulsesInfo=[]
let dairyInfo =[]

for (let index = 0; index < ProductData.length; index++) {
const element = ProductData[index];
switch (element.type) {
    case "Fruit":
        fruitInfo[fruitInfo.length]=element
        break;
    case "Vegetable":
        vegetableInfo[vegetableInfo.length]=element
        break;
    case "Pulses":
        pulsesInfo[pulsesInfo.length]=element
        break;
    case "dairy":
        dairyInfo[dairyInfo.length]=element
        break;        
}};

const Initialstate = {
        fruits:fruitInfo,
        vegetables:vegetableInfo,
        pulses:pulsesInfo,
        dairy : dairyInfo,
        cart: [],
        sellerProducts: [],
        orders: [],
    }


const CartReducer = (state=Initialstate,action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            const I1 = state.fruits;
            const I2 = state.dairy;
            const I3 = state.pulses;
            const I4 = state.vegetables;
            const temp = I1.concat(I2)
            const temp2 = temp.concat(I3)
            const full = temp2.concat(I4)
            const item = full.find((c) => c.id === action.payload.idV)
            const inCart = state.cart.find((item) => item.id === action.payload.idV ? true : false);
            return {
                ...state,
                cart: inCart ? state.cart.map((item) => item.id === action.payload.idV ? { ...item, qty: item.qty + 1 } : item) :
                    [...state.cart, { ...item, qty: 1, userInfo: action.payload.userInfo }],
            }
        case actionTypes.REM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.idV)
            }
        case actionTypes.ADD_QTY:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.idV ? { ...item, qty: item.qty + 1 } : item)
            }
        case actionTypes.SUB_QTY:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.idV ? { ...item, qty: item.qty - 1 } : item)
            }
        case actionTypes.ADD_TO_ORDER:
            const I11 = state.fruits;
            const I22 = state.dairy;
            const I33 = state.pulses;
            const I44 = state.vegetables;
            const temp11 = I11.concat(I22)
            const temp22 = temp11.concat(I33)
            const full11 = temp22.concat(I44)
            const itemxx = full11.find((c) => c.id === action.payload.idV)
            return {
                ...state,
                orders: { ...itemxx, userInfo: action.payload.userInfo }
            }
        case actionTypes.transfer:
            return {
                ...state,
                orders: action.payload.cart
            }
        default: return state

    }
}
export default CartReducer