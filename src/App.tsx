import React from "react"
import useGlobalState, { action, initialState, reducerReturnSchema, } from "./hooks/useGlobalState";
import SideBar from "./SideBar/SideBar";
import Dashboard from "./Dashboard/Dashboard";

export const StateContext = React.createContext({state:initialState,dispatch:(param:action<null>):void => {param}});

function App() {
  const {state,dispatch}:reducerReturnSchema = useGlobalState();

  return (
    <StateContext.Provider value={{state,dispatch}}>
      <main className="h-[809px] bg-black flex flex-col w-[1440px] mx-auto">
        <div className="bg-[#3772FF] h-[36.48px] flex justify-center items-center">
          <p className="text-white poppins font-semibold text-[18px] leading-[18px]">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>

        <section className="flex h-full">
          <SideBar/>
          <Dashboard/>
        </section>

      </main>
    </StateContext.Provider>
  );
}

export default App
