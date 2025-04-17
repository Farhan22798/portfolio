import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
   
      <a
        href="https://www.linkedin.com/in/mohammad-farhan-ahmed-b2b189209/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/Farhan22798"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
  href="https://wa.me/917507775555"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp size={24} />
</a>
      <a
  href="https://drive.google.com/file/d/1YLCNKTGymKXh3aw80XTSwrL4vH79HdRz/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFileAlt size={24} />
</a>

    </footer>
  );
};

export default Footer;