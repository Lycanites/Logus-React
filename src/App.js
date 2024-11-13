import "./App.css";
import Navbar from "./componentes/Navbar.tsx";
import Hero from "./page/Hero.tsx";

function App() {
  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
