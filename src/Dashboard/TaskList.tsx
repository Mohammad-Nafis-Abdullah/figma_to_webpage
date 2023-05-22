/* eslint-disable @typescript-eslint/no-explicit-any */
import useLocalStorage, { listSchema } from "../hooks/useLocalStorage";
import todoLogo from "../assets/todo.svg";
import plus from "../assets/plus.svg";
import { todoSchema } from "../hooks/useGlobalState";

const TaskList = ({ list }: { list: listSchema }) => {
  const { addTodo } = useLocalStorage();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    addTodo(list.Id, {
      id: "",
      title: e.target.title.value,
      description: e.target.description.value,
      isDone: false,
    });
    e.target.reset();
  };

  return (
    <div>
      <input
        className="w-[286.65px] py-[5px] pl-[18px] pr-[40px] text-[16px] leading-[41px] tracking-[1px] placeholder:text-[#6C6C6C] bg-[#242731] text-white font-semibold rounded-[12px] focus:outline-none"
        type="text"
        placeholder="Add Todo-List"
        readOnly
        value={`List : ${list.taskTitle}`}
      />

      <form
        onSubmit={handleSubmit}
        className="w-[286px] h-[116px] bg-[#191B20] p-[10.05px] rounded-[16px] space-y-[13px] mt-[4.87px] mb-[10px]"
      >
        <div className="flex items-center gap-x-[3.85px]">
          <img className="w-6 h-6" src={todoLogo} alt="Todo Icon" />
          <input
            className="bg-transparent focus:outline-none poppins font-bold text-[18px] leading-[24px] text-[#6E6E6E] focus:border-b-2 w-full grow"
            type="text"
            name="title"
            placeholder="Add Todo"
            autoComplete="off"
            required
          />
          <button
            type="submit"
            className="px-[7.5px] py-[6px] bg-[#353945] rounded-full"
          >
            <img
              className="w-[13.49px] h-[14.33px]"
              src={plus}
              alt="Add Todo"
            />
          </button>
        </div>
        <input
          className="bg-transparent focus:outline-none inter font-medium text-[16px] leading-[16px] text-[#808191] w-full focus:border-b-2 ml-[4px]"
          type="text"
          name="description"
          autoComplete="off"
          placeholder="Add Todo Description"
          required
        />
      </form>

      <section className="space-y-[10px] overflow-y-auto overflow-x-hidden h-[calc(100%-200px)] pr-1">
        {Object.values(list.todos)
          .reverse()
          .map((todo: todoSchema) => {
            return (
              <form
                key={todo.id}
                className="w-[286px] h-[116px] bg-[#191B20] p-[10.05px] rounded-[16px] space-y-[13px] mt-[4.87px]"
              >
                <div className="flex items-center gap-x-[3.85px]">
                  <img className="w-6 h-6" src={todoLogo} alt="Todo Icon" />
                  <input
                    className="bg-transparent focus:outline-none poppins font-bold text-[18px] leading-[24px] text-[#6E6E6E] focus:border-b-2 w-full grow"
                    type="text"
                    value={todo.title}
                    readOnly
                  />
                  <button
                    type="submit"
                    className="px-[7.5px] py-[6px] bg-[#353945] rounded-full"
                  >
                    <img
                      className="w-[13.49px] h-[14.33px]"
                      src={plus}
                      alt="Add Todo"
                    />
                  </button>
                </div>
                <input
                  className="bg-transparent focus:outline-none inter font-medium text-[16px] leading-[16px] text-[#808191] w-full focus:border-b-2 ml-[4px]"
                  type="text"
                  value={todo.description}
                  readOnly
                />
              </form>
            );
          })}
      </section>
    </div>
  );
};

export default TaskList;
