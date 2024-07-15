import React from 'react';
import { FaGithub } from 'react-icons/fa';

function GithubIcon() {
  return (
    <a
    href="https://github.com/reihan1305"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-black transition duration-300 ease-in-out"
  >
    <FaGithub className="w-10 h-10" />
  </a>
  );
}

export default GithubIcon;
