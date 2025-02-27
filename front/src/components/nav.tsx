import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyLogo</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center">
          <li><a href="#" className="block hover:underline">Home</a></li>
          <li><a href="#" className="block hover:underline">About</a></li>
          <li><a href="#" className="block hover:underline">Services</a></li>
          <li><a href="#" className="block hover:underline">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}