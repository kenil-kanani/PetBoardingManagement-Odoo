import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import SignUp from "./components/SignUp";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
