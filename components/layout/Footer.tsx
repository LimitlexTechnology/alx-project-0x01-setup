import React from 'react'

const Footer: React.FC = () => (
  <footer className="w-full py-6 border-t mt-8">
    <div className="container mx-auto px-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} ALX Project</div>
  </footer>
)

export default Footer
