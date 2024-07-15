const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/forselfPorto.pdf';
    link.download = 'cvReihan.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className="flex-column md:items-start mt-10"
      style={{ height: "100vh" }}
    >
      <section id="Home">

     
      <div
        
        className="flex flex-col sm:flex-row mt-10 md:py-5 md:justify-center md:items-center"
      >
        <div className="px-5">
          <h1 className="font-bold text-3xl">
            Hello,
            <br />
            I'm Reihan
          </h1>
          <p className="text-xl text-grey-600">Fullstack Developer</p>
          <div className="hidden sm:flex sm:gap-5">
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
              onClick={handleDownload}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="flex flex-col mx-5 sm:mx-0 md:ms-10">
          <div
            className="w-60 h-80 flex justify-center md:items-center"
            style={{ boxShadow: "10px 10px 0px 2px rgba(0,0,0,1)" }}
          >
            <img
              src="/me.png"
              alt="Me"
              className="h-full object-cover w-full "
            />
          </div>

          <div className="flex gap-5 sm:hidden mt-10">
            <button
              className="bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
              style={{ boxShadow: "6px 5px 0px 1px #00C6AE" }}
            >
              Hire Me
            </button>
            <button
              className="bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
              style={{ boxShadow: "6px 5px 0px 1px #00C6AE" }}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Home;
