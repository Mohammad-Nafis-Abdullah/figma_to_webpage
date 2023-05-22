/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import plus from "../assets/plus.svg";
import useLocalStorage from "../hooks/useLocalStorage";
import TaskList from "./TaskList";
import { StateContext } from "../App";


const TasksDisplay = ({className}:{className:string}) => {
  const {state:{stored_list:allList}} = useContext(StateContext);
  const {addList} = useLocalStorage();


  const handleSubmit = (e:any)=> {
      e.preventDefault();
      // console.log((e.target as HTMLFormElement).title.value || '');
      const ListTitle = e.target.title.value || 'Empty List';
      addList(ListTitle);
      e.target.reset();
  }

  return (
    <div className={`${className} inter px-[16.94px] py-[17px] flex gap-x-[12.35px] overflow-x-auto`}>
      
      {
        allList && 
        allList.map((list)=> <TaskList key={list.Id} list={list}/>)
      }
      
      <form onSubmit={handleSubmit} className="relative inline-block self-start">
        <input className="w-[249px] py-[5px] pl-[18px] pr-[40px] text-[16px] leading-[41px] tracking-[1px] placeholder:text-[#6C6C6C] bg-[#242731] text-white font-semibold rounded-[12px]" name="title" type="text" placeholder="Add Todo-List"/>
        <button className="px-[7.24px] py-[8.18px] bg-[#353945] rounded-[12px] absolute top-[calc(50%-15.345px)] right-[12.41px] active:scale-95" type="submit">
          <img className="w-[11.94px] h-[14.33px]" src={plus} alt="Add" />
        </button>
      </form>
    </div>
  );
};

export default TasksDisplay;