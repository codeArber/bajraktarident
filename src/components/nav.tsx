import { HeaderText } from "./components";

export function Nav() {
  return (
    <div className="sticky top-0 bg-white shadow-md w-full z-10">
        <div className="w-full flex p-4 items-center justify-center">
            <div className="w-3/4 sm:w-1/2 pl-6 ">
            <HeaderText text="Bajraktari Dent" />
            </div>
            <div className="w-1/4 sm:w-1/2 h-full pr-2 sm:pr-20">
               <img src="/BajraktariDent.jpg" alt="Bajraktari Dent" className="w-20 float-right"/>
            </div>
        </div>
    </div>
  );
}