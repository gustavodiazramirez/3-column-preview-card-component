import Luxury from "./components/Luxury";
import Sedans from "./components/Sedans";
import Suvs from "./components/Suvs";

function App() {
  return (
    <div className="min-h-screen bg-neutral-very-light-gray py-10 flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center flex-1">
        <Sedans />
        <Suvs />
        <Luxury />
      </div>
    </div>
  );
}

export default App;
