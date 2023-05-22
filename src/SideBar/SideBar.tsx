import logo from "../assets/N.svg";
import slideLeft from "../assets/slide-left.svg";
import dark from "../assets/darkmood.svg";
import web from "../assets/web.svg";
import home from "../assets/Home.svg";
import sec1 from "../assets/sec-1.svg";
import sec2 from "../assets/sec-2.svg";
import sec8 from "../assets/sec-8.svg";
import sec8_white from "../assets/sec-8-white.svg";


const topMenus:{img:string,title:string,select:boolean}[] = [
  {
    img:home,
    title:'Home',
    select:false
  },
  {
    img:sec1,
    title:'Section 1',
    select:false
  },
  {
    img:sec2,
    title:'Section 2',
    select:false
  },
  {
    img:sec8,
    title:'Section 8',
    select:false
  },
  {
    img:sec8_white,
    title:'Section 8',
    select:true
  }
]

const SideBar = () => {
  return (
    <div className="max-w-[251px] w-full pt-[33.52px] pr-[26.06px] pb-[27.36px] pl-[9px] inter flex flex-col">

      {/* top menu section */}
      <section className="grow">
        <div className="pl-[17px] pr-[17.74px] flex items-center gap-x-[7.91px]">
          <img className="w-[29.82px] h-[28.24px]" src={logo} alt="Logo" />
          <h3 className="poppins text-[23.56px] leading-[31.42px] tracking-[-2%] text-white font-semibold grow">
            Name
          </h3>
          <img
            className="w-[20px] h-[16.1px]"
            src={slideLeft}
            alt="Slide-left"
          />
        </div>
        <div className="flex flex-col gap-y-[11px] mt-[20px]">
          {topMenus.map((menu,i)=> {
              return <button key={i} className={`py-[9px] px-[20.28px] inline-flex items-center gap-x-[20.54px] ${menu.select?'text-white bg-[#353945]':'text-[#848484]'} w-full rounded-[12px]`}>
                <img src={menu.img} alt={menu.title} />
                <span className="font-semibold text-[14px] leading-[24px]">{menu.title}</span>
              </button>;
          })}
        </div>
      </section>

      {/* bottom menu section */}
      <section className="pl-[12.34px] pr-[7px] flex flex-col gap-y-[18.43px]">
        <div className="inline-flex items-center gap-x-[6px]">
          <button className="pt-[2.49px] px-[15.15px] pb-[2.34px] bg-[#353945] inline-flex gap-x-[6.75px] items-center rounded-[10px]">
            <img className="w-[16.44px] h-[17.05px]" src={logo} alt="" />
            <span className="font-semibold text-[14px] leading-[28.75px] text-white">$0.90</span>
          </button>
          <button className="px-[13px] py-[3.27px] bg-[#A3E3FF] text-[#3772FF] text-[14px] leading-[28.75px] font-semibold rounded-[10px]">
            Buy $XYZ
          </button>
        </div>

        <div className="inline-flex items-center gap-x-[12.59px]">
          <img className="w-[20.11px] h-[21.06px]" src={web} alt="Language" />
          <button className="bg-[#353945] py-[3.81px] px-[5.91px] rounded-[12.93px] inline-flex items-center gap-x-[11.92px]">
            <img className="w-[15.19px] h-[15.11px]" src={dark} alt="Dark-mood" />
            <div className="w-[18.23px] h-[18.23px] bg-[#3772FF] rounded-full"/>
          </button>
        </div>
      </section>

    </div>
  );
};

export default SideBar;