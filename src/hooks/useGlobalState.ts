import { useReducer } from "react";

// required schemas
export interface todoSchema{
  id:string;
  title:string;
  description:string;
  isDone: boolean
}
export interface stateSchema{
  selected_Todo: todoSchema | null;
}
export type dispatchSchema = <T extends todoSchema | null>(param: action<T>) => void;

export interface action<T>{
  type:string,
  value:T
}
export interface reducerReturnSchema{
  state: stateSchema;
  dispatch: dispatchSchema;
}



// initial state
export const initialState:stateSchema = {
  selected_Todo:null,
}


const reducer = <T extends todoSchema | null>(state:stateSchema,action:action<T>):stateSchema=> {
    switch (action.type) {
      case "selected_Todo":
        return {...state,selected_Todo:action.value};
    
      default:
        return {...state};
    }
}


export default function useGlobalState():reducerReturnSchema{
  const [newState,dispatch]:[stateSchema,dispatchSchema] = useReducer(reducer,initialState);


  return {state:{...newState},dispatch};
}