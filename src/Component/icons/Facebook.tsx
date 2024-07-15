import { FaFacebook } from 'react-icons/fa';

function FacebookIcon() {
  return (
    <a
    href="https://www.facebook.com/profile.php?id=100017343370277"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-blue-600 transition duration-300 ease-in-out"
  >
    <FaFacebook className="w-10 h-10" />
  </a>
  );
}

export default FacebookIcon;
