import React, { useRef, useState } from 'react';
import "./Header.css";
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {

  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-400px";
    setIsMenuOpen(false);
  };

  const handleNavItemClick = () => {
    closeMenu(); 
  };

  const navbarVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight - window.innerHeight - 100,
      behavior: "smooth"
    });
    closeMenu();
  };

  return (
    <header className="header">
      <motion.h1 initial="hidden" animate="visible" variants={navbarVariants} className='headerh1'>
        Chandru
      </motion.h1>
      <motion.nav initial="hidden" animate="visible" variants={navbarVariants}>
        <ul ref={menuRef} className='nav-menu'>
          {!isMenuOpen && <RxHamburgerMenu onClick={openMenu} className='nav-mob-open' />}
          {isMenuOpen && <IoCloseOutline onClick={closeMenu} className='nav-mob-close' />}

          <li><a href='#home' onClick={handleNavItemClick}>Home</a></li>
          <li><a href='#about' onClick={handleNavItemClick}>About me</a></li>
          <li><a href='#project' onClick={handleNavItemClick}>Projects</a></li>
          <li onClick={scrollToBottom}>Contact</li>
        </ul>
      </motion.nav>

      <motion.button onClick={scrollToBottom} className='nav-connect' initial="hidden" animate="visible" variants={navbarVariants}>
        Connect with me
      </motion.button>
    </header>
  );
};

export default Header;
