/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer } from "react";
import { listSchema } from "./useLocalStorage";

// required schemas
export interface todoSchema{
  id:string;
  title:string;
  description:string;
  isDone: boolean
}
export interface stateSchema{
  selected_Todo: todoSchema | null;
  stored_list: listSchema[] | null;
}
export type dispatchSchema = (param: action) => void;

export interface action{
  type:string,
  value:any;
}
export interface reducerReturnSchema{
  state: stateSchema;
  dispatch: dispatchSchema;
}



// initial state
export const initialState:stateSchema = {
  selected_Todo:null,
  stored_list:null,
}


const reducer = (state:stateSchema,action:action):stateSchema=> {
    switch (action.type) {
      case "selected_Todo":
        return { ...state, selected_Todo: action.value };

      case "stored_list":
        return { ...state, stored_list: action.value };

      default:
        return { ...state };
    }
}


export default function useGlobalState():reducerReturnSchema{
  const [newState,dispatch]:[stateSchema,dispatchSchema] = useReducer(reducer,initialState);


  return {state:{...newState},dispatch};
}