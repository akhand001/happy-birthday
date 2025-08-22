import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= fullHeight - 30) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      style={{
        ...footerStyle,
        transform: showFooter ? "translateY(0)" : "translateY(100%)",
        opacity: showFooter ? 1 : 0,
      }}
    >
      <p style={textStyle}>
        © 2025 My Website. Made with ❤️ by Akhand.
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.9)", // dark semi-transparent bg
  color: "#fff", // white text
  padding: "0.75rem 1rem",
  width: "100%",
  position: "fixed",
  bottom: 0,
  left: 0,
  transition: "transform 0.4s ease, opacity 0.4s ease",
  boxShadow: "0 -2px 10px rgba(0,0,0,0.4)",
  zIndex: 1000,
};

// Responsive text style
const textStyle = {
  fontSize: "0.85rem", // good for Android view
  lineHeight: "1.4",
  margin: 0,
  wordWrap: "break-word",
};

export default Footer;
