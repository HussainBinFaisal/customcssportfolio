import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-4 px-6 flex justify-between items-center">
      <a href="/" className="text-3xl font-bold hover:text-yellow-500">Hussains Portfolio</a>
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-yellow-500">Home</Link>
        <Link href="/about" className="hover:text-yellow-500">About</Link>
        <Link href="/contact" className="hover:text-yellow-500">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
