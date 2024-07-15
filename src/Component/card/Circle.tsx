
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function CircleCard() {
  return (
    <div className="bg-green-600	rounded-xl py-10 px-5 sm:px-10 flex items-start gap-10">
      <div className="sm:w-1/2 ">
        <div className="flex-column sm:hidden justify-center items-center mb-2">
          <h1 className="text-black text-2xl font-bold text-start">Circle</h1>
          <p className="text-black font-bold text-justify">
            Circle is a social media website that has header, follow, reply and
            edit profile features like Twitter
          </p>
        </div>
        <img
          src="/circle.png"
          className="hover:shadow-2xl shadow-md object-contain rounded-xl transition duration-300 transform hover:scale-110"
        />
        <div className="mt-5 ">
          <h1 className="text-center text-2xl font-bold">Tech Flow</h1>
          <div className="flex gap-5 items-center justify-center mt-2">
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-yellow-600 transition duration-300 ease-in-out flex items-end"
            >
              <span className="font-bold text-md hover:text-black">
                Express
              </span>
              <IoLogoJavascript className="w-10 h-10" />
            </a>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition duration-300 ease-in-out flex items-end"
            >
              <FaReact className="w-10 h-10" />
            </a>
            <a
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 transition duration-300 ease-in-out flex items-end"
            >
              <FaNodeJs className="w-10 h-10" />
            </a>
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition duration-300 ease-in-out flex items-end"
            >
              <BiLogoPostgresql className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden sm:block flex-column justify-start items-start w-1/2">
        <h1 className="text-black text-2xl font-bold text-start">Circle</h1>
        <p className="text-black font-bold text-justify pe-20">
          Circle is a social media website that has header, follow, reply and
          edit profile features like Twitter
        </p>
        <div>
          <img
            src="/circle2.png"
            className=" h-32 shadow-md object-contain rounded-xl transition duration-300 transform hover:scale-95 hover:shadow-custom"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-black text-2xl font-bold text-start">
            Source Code
          </h1>
          <div className="flex gap-5">
            <a
              href="https://github.com/Reihan1305/project-circle-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition duration-300 ease-in-out flex items-end gap-2"
            >
              <span className="font-bold text-md">Backend</span>{" "}
              <FaGithub className="w-10 h-10" />
            </a>
            <a
              href="https://github.com/Reihan1305/project-circle-v2-fe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition duration-300 ease-in-out flex items-end gap-2"
            >
              <span className="font-bold text-md">Frontend</span>{" "}
              <FaGithub className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
