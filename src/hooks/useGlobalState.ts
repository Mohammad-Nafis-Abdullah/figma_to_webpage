/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useReducer } from "react";

// schema's
export interface todoSchema{
  id:string;
  title:string;
  description:string;
  isDone: boolean
}
export interface stateSchema{
  selected_Todo: todoSchema | null;
}
export interface action{
  type:string,
  value:any
}




export const initialState:stateSchema = {
  selected_Todo:null,
}


const reducer = (state:stateSchema,action:action):stateSchema=> {
    switch (action.type) {
      case "selected_Todo":
        return {...state,selected_Todo:action.value};
    
      default:
        return {...state};
    }
}


export default function useGlobalState():{state: stateSchema;dispatch: (param: action) => void;}{
  const [newState,dispatch]:[stateSchema,(param:action)=>void] = useReducer(reducer,initialState);


  return {state:{...newState},dispatch};
  // return {state:newState,dispatch};
}