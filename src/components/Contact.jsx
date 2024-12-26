import { CONTACT } from '../constants';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";

const Contact = ({ isCustomBackground }) => {
  return (
    <div className="pb-20">
      <h2 className={`my-10 text-center text-4xl font-bold ${isCustomBackground ? 'text-amber-800'  : 'text-white'}`}>
        Contact
      </h2>
      <div className="text-center tracking-tighter">
        <p className={`my-4 ${isCustomBackground ? 'text-gray-700' : 'text-neutral-300'}`}>{CONTACT.address}</p>
        <p className={`my-4 ${isCustomBackground ? 'text-gray-700' : 'text-neutral-300'}`}>{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className={`my-4 border-b ${isCustomBackground ? 'text-gray-700' : 'text-neutral-300'}`}>
          {CONTACT.email}
        </a>
        
        <div className="flex justify-center items-center gap-4 text-2xl mt-6">
          <a
            href="https://www.linkedin.com/in/teukufazarizbasya/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-blue-700 transition-colors duration-300 ${isCustomBackground ? 'text-black' : 'text-white'}`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Teukufazariz"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-gray-700 transition-colors duration-300 ${isCustomBackground ? 'text-black' : 'text-white'}`}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/teukufazariz/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-babyBlue transition-colors duration-300 ${isCustomBackground ? 'text-black' : 'text-white'}`}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;