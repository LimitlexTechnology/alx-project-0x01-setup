import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 border-t text-center text-sm text-gray-500 bg-white">
      © {new Date().getFullYear()} alx-project-0x01
    </footer>
  );
};

export default Footer;
