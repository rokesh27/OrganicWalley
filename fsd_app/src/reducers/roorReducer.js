import {combineReducers} from 'redux'
import CartReducer from '../components/cart/CartReducer';
import CounterReducer from "./CounterReducer";
const rootReducer = combineReducers({counterReducer1: CounterReducer,shop:CartReducer})
export default rootReducer;