import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white">
      <h1 className="text-2xl font-light">alx-project-0x01</h1>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
