import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  const text = "Aspiring Backend Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <header className="header">
      {/* Logo + Navbar */}
      <div className="logo">Tejaswini H</div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hero Text */}
      <div className="header-text">
        <p className="typing">{displayedText}</p>
        <h1>
          Hi, I'm <span>Tejaswini H</span>
          <br /> from Karnataka
        </h1>
      </div>
    </header>
  );
}
