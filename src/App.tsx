import "./App.css";
import { HeaderText } from "./components/components";
import { Nav } from "./components/nav";

function App() {
  return (
    <div className="h-fit w-full top-0 left-0 absolute">
      <Nav />
      <MainContent />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-fit">
      <section className="w-full px-2 sm:px-10 py-24 bg-gray-50 flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full sm:w-1/2 flex justify-center items-center py-4">
          <HeaderText text="Aty ku buzëqeshja juaj është prioritet" />
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img src="/dent_1.jpg" alt="Bajraktari Dent" className="w-[70%]" />
        </div>
      </section>

      <section className="w-full px-2 sm:px-10 py-24 flex flex-col items-center justify-center">
        <div className="w-full text-center mb-10">
          <HeaderText text="Ku mund të na gjeni?" />
          <p className="sm:text-md md:text-lg lg:text-xl text-sm py-4">Ngjitur me TV Koplikun, Qendër, Kati 2</p>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-between">
          <img
            src="/koplik_location.png"
            alt="Bajraktari Dent"
            className="w-[80%] sm:w-[60%] h-fit py-4"
          />
          <img src="/dent_4.jpeg" alt="Bajraktari Dent" className="w-[60%] sm:w-[30%]" />
        </div>
      </section>

      <section className="w-full px-2 sm:px-10 py-24 flex flex-col bg-gray-50 items-center justify-center">
        <div className="w-full text-center mb-10">
          <p className="text-xl text-[#443fde] font-semibold py-4">
            BAJRAKTARI DENT
          </p>
          <HeaderText text="Komoditet dhe kujdes ndaj pacientit!" />
        </div>
        <div className="w-full flex flex-col items-center space-y-10">
          <div className="w-full flex flex-row justify-center space-x-10">
            <img
              src="/dent_7.jpeg"
              alt="Bajraktari Dent"
              className="w-[40%] h-fit"
            />
            <img src="/dent_6.jpeg" alt="Bajraktari Dent" className="w-[40%]" />
          </div>
          <div className="w-full flex flex-row justify-center space-x-10">
            <img
              src="/dent_3.jpg"
              alt="Bajraktari Dent"
              className="w-[40%] h-fit"
            />
            <img src="/dent_5.jpeg" alt="Bajraktari Dent" className="w-[40%]" />
          </div>
        </div>
      </section>

      <section className="w-full px-2 sm:px-10 py-24 flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full sm:w-1/2 flex justify-center items-center py-4">
          <HeaderText text="Ju mirëpresim!" />
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img
            src="/dent_10.jpeg"
            alt="Bajraktari Dent"
            className="float-right w-[70%]"
          />
        </div>
      </section>

      <section className="w-full px-2 sm:px-10 py-24 flex flex-col sm:flex-row bg-gray-50 items-center justify-center">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img src="/dent_2.jpg" alt="Bajraktari Dent" className="w-[70%]" />
        </div>
        <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between">
          <p className="xl:text-5xl lg:text-4xl md:text-2xl text-md font-bold px-2 sm:px-10">
            Dr. Zhaneta Bajraktari <br /> dhe <br /> Dr. Arjon Bajraktari
          </p>
          <div className="flex items-center justify-center py-20 w-full">
            <img src="/call.png" alt="Bajraktari Dent" className="w-12" />
            <p className="xl:text-5xl lg:text-4xl md:text-2xl text-md font-bold px-2 sm:px-10">
              068 470 8888
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
