/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';
import leftArrow from '../assets/leftArrow.svg'
import { StateContext } from '../App';
import useLocalStorage from '../hooks/useLocalStorage';

const EditPannel = ({className}:{className:string}) => {
  const { state:{selected_Todo,selected_List}, dispatch } = useContext(StateContext);
  const {updateTodo} = useLocalStorage();
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');


  useEffect(()=> {
    if (selected_Todo) {
      setTitle(selected_Todo.title);
      setDescription(selected_Todo.description);
    }
  },[selected_Todo])

  const handleSubmit = (e:any)=> {
    e.preventDefault();

    // console.log(selected_Todo);

    if (title && description && selected_Todo && selected_List) {
      updateTodo(selected_List,{...selected_Todo,description,title})
    } else {
      window.alert("Doesn't insert empty field");
    }

    dispatch({type:'selected_Todo',value:null});
    setTitle('');
    setDescription('');
    e.target.reset()
  }

  return (
    <div className={`${className} pt-[21px] pl-[18px] pr-[15px]`}>
      
      <section className='inline-flex items-baseline gap-x-[17.93px] mb-[7px]'>
        <img className='w-[11.07px] h-[9.18px]' src={leftArrow} alt="leftArrow" />
        <p className='inter font-medium text-[18px] h-[34px] leading-[24px] text-white'>Edit Todo</p>
      </section>

      <form onSubmit={handleSubmit} className='flex flex-col gap-y-[8px]'>
        <input onChange={(e)=>setTitle(e.target.value)} type="text" className='min-w-0 h-[51px] w-full bg-[#242731] whitespace-nowrap overflow-ellipsis px-[17px] py-[12px] text-[#A6A6A6] font-bold poppins text-[20px] leading-[24px] rounded-[12px]' placeholder='Todo Title' value={title} />

        <textarea onChange={(e)=>setDescription(e.target.value)} className='min-w-0 h-[110px] resize-none overflow-y-auto w-full bg-[#242731] p-[19px] inter text-[14px] text-[#808191] leading-[16px] font-medium rounded-[12px]' placeholder='Description' value={description} ></textarea>
        
        <input type="submit" value="Save" className='min-w-0 mt-[8px] text-[16px] leading-[28.75px] inter font-semibold text-center pt-[3px] pb-[2px] rounded-[10px] bg-[#3772FF] text-white cursor-pointer active:scale-[0.99] disabled:cursor-not-allowed disabled:scale-100 disabled:opacity-30' disabled={!selected_Todo || !selected_List}/>
      </form>

    </div>
  );
};

export default EditPannel;