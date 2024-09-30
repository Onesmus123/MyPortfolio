import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Onesmus Mutyauvyu</h4>
      <h4>Copyright &copy; 2024 OM</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Onesmus123" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/onesmus-mutyauvyu-b5a9a024a" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
        <a href='mailto:mutyauvyudavid@gmail.com' rel="noopener noreferrer"><GrMail /></a>
      </div>
    </footer>
  )
}

export default Footer;
