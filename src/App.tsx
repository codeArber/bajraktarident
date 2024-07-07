import "./App.css";
import { Nav } from "./components/nav";

function App() {
  return (
    <div className="h-screen w-screen top-0 left-0 absolute">
      <Nav />
      <MainContent />
    </div>
  );
}

function MainContent() {
  return (
    <div className="pt-32 flex flex-col align-center w-full">
      <div className="w-full px-10 py-24 flex flex-row bg-gray-50 items-center justify-center ">
        <div className="w-1/2">
          <p className="text-4xl font-bold px-10">Aty ku buzëqeshja juaj është prioritet</p>
        </div>
        <div className="w-1/2">
          <img src="/dent_1.jpg" alt="Bajraktari Dent" className="float-right" />
        </div>
      </div>
      <div className="w-full px-10 py-24">Location</div>
      <div className="w-full px-10 py-24">Kolazh</div>
      <div className="w-full px-10 py-24">Kontakt</div>
    </div>
  );
}

export default App;
