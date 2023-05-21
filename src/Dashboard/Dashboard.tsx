import EditPannel from "./EditPannel";
import TasksDisplay from "./TasksDisplay";
import wallet from "../assets/Wallet.svg";

const Dashboard = () => {
  return (
    <div className="border-l-4 border-[#242731] grow flex flex-wrap">
      
      <section className="grow basis-full h-[62.52px] border-b-4 border-[#242731] flex items-center justify-between pl-[49.77px] pr-[16.31px] poppins">
        <p className="inter font-semibold text-[18px] leading-[18px] text-white underline underline-offset-[7px]
        decoration-2 decoration-[#3772FF]">Section</p>
        <button className="h-[39.27px] w-[196.69px] bg-[#191B20] rounded-[12.2549px] pl-[12.99px] pr-[10.99px] flex items-center justify-between">
          <img className="h-[14.15px] w-[19.16px]" src={wallet} alt="wallet" />
          <span className="text-white text-[16px] leading-[34.64px] font-medium">0.2 $XYZ</span>
          <span className="py-[4.04px] px-[6.85px] bg-[#A3E3FF] text-[12px] text-[#3772FF] leading-[14.73px] rounded-[5px]">Tier 1</span>
        </button>
      </section>

      <TasksDisplay className="basis-[calc(100%-298px)] h-[calc(100%-62.52px)]"/>
      
      <EditPannel className="border-l-4 border-[#242731] basis-[298px]"/>
    </div>
  );
};

export default Dashboard;