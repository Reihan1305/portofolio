import React from "react";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/forselfPorto.pdf';
    link.download = 'cvReihan.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg-amber-400 h-screen">
      <section
        className="bg-blue-600 my-5 mx-1 md:mx-16 rounded-2xl p-6 md:p-10 flex-column justify-center gap-10 items-center md:flex"
        id="About"
      >
        <div className="w-3/4 h-72 flex justify-center items-center shadow md:hover:shadow-custom transform md:hover:-translate-y-10 md:hover:scale-105 transition">
          <img
            src="/me.png"
            alt="Me"
            className="h-full object-cover w-full rounded-xl md:rounded-none"
          />
        </div>
        <div>
          <h1 className="text-white text-3xl font-bold">About Me</h1>
          <h3 className="text-amber-400 text-xl font-bold">
            Fullstack Developer
          </h3>
          <span
            className="text-white text-lg text-justify"
            style={{ width: "80%", height: "100%" }}
          >
            Graduate of coding bootcamp at PT Dumbways Indonesia Technology.
            There I was taught to make web using HTML, JavaScript, TypeScript,
            Node Js for server side, Nest JS and Express JS for backend
            framework, React for frontend framework, and Postgres SQL for
            database, There I made several websites including Circle a social
            media web, WaysBeans a web to sell and buy coffee, and lakoe an
            E-Commerce web that is done in groups.
          </span>

          <div className="flex gap-5 mt-2">
            <a
              className="bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
              style={{ boxShadow: "6px 5px 0px 1px #00C6AE" }}
              href="mailto:freihan570@gmail.com?subject=work opportunities"
            >
              Hire Me
            </a>
            <button
              className="bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
              style={{ boxShadow: "6px 5px 0px 1px #00C6AE" }}
              onClick={handleDownload}>
              Download CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
