import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer";
import { customReducerEnhancer } from "./customReducerEnhancer";
import { multiActions } from "./multiActionMiddleware";
import { asyncEnhancer } from "./asyncEnhancer";
import { createRestMiddleware } from "../webservice/RestMiddleware";

const enhancedReducer = customReducerEnhancer(
    combineReducers(
        {
            modelData: modelReducer, 
            stateData: stateReducer
        })
);

const restMiddleware = createRestMiddleware(
    "http://localhost:3500/api/products", 
    "http://localhost:3500/api/suppliers");

export default createStore(enhancedReducer, 
    compose(applyMiddleware(multiActions), 
        applyMiddleware(restMiddleware),  
        asyncEnhancer(2000)));

export { saveProduct, saveSupplier, deleteProduct, deleteSupplier } 
    from "./modelActionCreators";
