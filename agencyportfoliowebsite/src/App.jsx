import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
// import ser from "./components/main";
import Process from "./components/process";
import Services from "./components/Services";
import Footer from "./components/footer";
import ContactUs from "./components/contactUs";
import TechStack from "./components/techStack";
import ChatBot from "./components/ChatBot";

import "./App.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <NavBar />

      <main className="max-w-screen w-screen mx-auto ">
        <Hero />
        <Services />
        <Process />
        <TechStack />
        <ContactUs />
        <ChatBot />
      </main>
      <Footer />
    </div>
  );
}

export default App;
