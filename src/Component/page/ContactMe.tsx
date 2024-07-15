import React from "react";
import GithubIcon from "../icons/Github";
import LinkedInIcon from "../icons/LinkedIn";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";

const ContactMe = () => {
  const [boxShadow, setBoxShadow] = React.useState("6px 5px 0px 1px black");

  const handleMouseEnter = () => {
    setBoxShadow("6px 5px 0px 1px white");
  };

  const handleMouseLeave = () => {
    setBoxShadow("6px 5px 0px 1px black");
  };

  return (
    <div className="h-screen mt-32">
      <section   id="ContactMe">
      <div
        className="bg-green-500 sm:px-32 py-14 flex flex-col items-center justify-center"
      
      >
        <h1 className="text-center text-white font-bold text-3xl mb-8">
          If you have any Query or Project ideas feel free to
        </h1>
        <a
          style={{ boxShadow }}
          href="mailto:freihan570@gmail.com?subject=Hai Lets Talk"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="bg-yellow-800 text-black py-2 px-4 rounded-full hover:bg-black hover:text-white hover:shadow-yellow-500 transition duration-300 ease-in-out font-bold text-3xl"
        >
          Contact Me
        </a>
      </div>
      <div className="sm:px-32 py-14 flex-column">
        <div className="gap-2 flex items-center justify-center">
          <img src="R.png" width="50px" alt="Logo" />
          <span className="text-black font-bold text-3xl">Reihan Firdaus</span>
        </div>
        <div className="px-2 sm:px-44 mt-5">
          <p className="text-black text-justify font-bold text-xl sm:text-3xl">
            I Make as soon as Possible. If you really like my work contact me
            and let’s Work Together.
          </p>
        </div>
        <div className="flex mt-10 gap-5 items-center justify-center">
          <GithubIcon />
          <LinkedInIcon />
          <FacebookIcon />
          <InstagramIcon />
        </div>

      </div>
      </section>
    </div>
  );
};

export default ContactMe;
