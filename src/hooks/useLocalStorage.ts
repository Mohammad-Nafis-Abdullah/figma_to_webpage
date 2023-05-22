/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { todoSchema } from "./useGlobalState";
import { StateContext } from "../App";

// schema
export interface listSchema{
  Id:string;
  taskTitle:string;
  todos: {
    [id:string]:todoSchema;
  }
}
export interface storageSchema{
  [id:string]:listSchema;
}


const storage_name = 'mna-todo-collection'; 

const getStorage = ():storageSchema=> {
    let storage:storageSchema;
    storage = JSON.parse(localStorage.getItem(storage_name) || "{}");
    if (storage) {
      return storage;
    } else {
      storage = {}
      return storage;
    }
}


export default function useLocalStorage():{
  addList:(taskTitle:string)=>void,
  deleteList:(listId:string)=>void,
  addTodo:(listId:string,newTodo:todoSchema)=>void,
  updateTodo:(listId:string,todoUpdated:todoSchema)=>void,
  deleteTodo:(listId:string,todoId:string)=>void,
}{
    const {dispatch} = useContext(StateContext);
    const [data,setData]:[storageSchema,(param:storageSchema)=>void] = useState<storageSchema>(getStorage());

    useEffect(()=> {
        localStorage.setItem(storage_name,JSON.stringify(data));
        dispatch({
          type:'stored_list',
          value:Object.values(data),
        })
    },[data])

    const addList = (taskTitle:string):void=> {
      const dataCopy = getStorage();
        const Id = `${Date.now()}`;
        const newList = {taskTitle,Id,todos:{}}
        setData({...dataCopy,[Id]:newList});
    }

    const deleteList = (listId:string):void=> {
      const dataCopy = getStorage();
      delete dataCopy[listId];
      setData(dataCopy);
    }

    const addTodo = (listId:string,newTodo:todoSchema):void=> {
      const dataCopy = getStorage();
      const id = `${Date.now()}`;
      dataCopy[listId].todos[id] = {...newTodo,id};
      setData(dataCopy);
    }

    const updateTodo = (listId:string,todoUpdated:todoSchema):void=> {
        const dataCopy = getStorage();
        dataCopy[listId].todos[todoUpdated.id] = todoUpdated;
        setData(dataCopy);
    }

    const deleteTodo = (listId:string,todoId:string)=> {
      const dataCopy = getStorage();
      delete dataCopy[listId].todos[todoId];
      setData(dataCopy);
    }

    // console.log({data,dataArr:Object.values(data)});

    return {addList,deleteList,addTodo,updateTodo,deleteTodo};
}