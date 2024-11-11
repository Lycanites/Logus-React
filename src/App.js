import "./App.css";
import Navbar from "./componentes/Navbar.tsx";
import Hero from "./componentes/Hero.tsx";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
// import Login from "Login";

function App() {
  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <Navbar />
      <Hero />
      {/* <Route>
        <Route path="/Login" element={<Login />} />
      </Route> */}
    </div>
  );
}

export default App;
