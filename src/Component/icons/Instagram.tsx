import { FaInstagram } from 'react-icons/fa';

function InstagramIcon() {
  return (
    <a
    href="https://www.instagram.com/_freihan_/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-pink-600 transition duration-300 ease-in-out"
  >
    <FaInstagram className="w-10 h-10" />
  </a>
  );
}

export default InstagramIcon;
