import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t p-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} alx-project-0x01
    </footer>
  );
};

export default Footer;

