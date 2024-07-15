import Navbar from "./Component/Navbar";
import Home from "./Component/page/Home";
import InstagramIcon from "./Component/icons/Instagram";
import FacebookIcon from "./Component/icons/Facebook";
import LinkedInIcon from "./Component/icons/LinkedIn";
import GithubIcon from "./Component/icons/Github";
import About from "./Component/page/About";
import Services from "./Component/page/Services";
import { FaLocationDot } from "react-icons/fa6";

import ContactMe from "./Component/page/ContactMe";

export default function App() {
  return (
    <>
      <div className="bg-amber-400 h-screen overflow-y-scroll scrollbar-hide relative  scrollbar-hide scroll-smooth">
      <Navbar />
        <Home />
        <About />
        <Services />
        <ContactMe />
        <footer className="p-5 pb-18 flex-column sm:flex justify-between bg-gray-200">
          <div className="flex-column sm:flex gap-2 items-center ">
            <div className="flex gap-2 items-center ">
            <FaLocationDot className="text-2xl" />
            <span className="text-black font-bold text-md sm:text-md">
              {" "}
              Bogor, Indonesia, 
            </span>
            </div>
          
            <span className="text-black font-bold text-md sm:text-md ">
              {" "}
              @freihan570@gmail.com
            </span>
          </div>
          <div>
          </div>
          <div className="flex-column gap-5 sm:items-center sm:flex ">
            <div>
            <a className="text-black text-black font-bold text-md hover:text-amber-400" href="#Home">
              home
            </a>
            </div>
            <div>
            <a className="text-black text-black font-bold text-md hover:text-amber-400" href="#About">
              About
            </a>
            </div>
            <div>
            <a className="text-black text-black font-bold text-md hover:text-amber-400" href="#Services">
              Project
            </a>
            </div>
            <div>
            <a className="text-black text-black font-bold text-md hover:text-amber-400" href="#ContactMe">
              Contact
            </a>
            </div>
            
          </div>
        </footer>
      </div>
      <div className="fixed bottom-20 right-4 flex-column">
        <GithubIcon />
        <LinkedInIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </>
  );
}
