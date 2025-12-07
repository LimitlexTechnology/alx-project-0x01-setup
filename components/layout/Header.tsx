import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
  <header className="w-full py-4 border-b">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-xl font-medium">ALX Project</h1>
      <nav className="space-x-4">
        <Link href="/"><a className="text-gray-700 hover:text-gray-900">Home</a></Link>
        <Link href="/posts"><a className="text-gray-700 hover:text-gray-900">Posts</a></Link>
        <Link href="/users"><a className="text-gray-700 hover:text-gray-900">Users</a></Link>
      </nav>
    </div>
  </header>
)

export default Header
