

const Navbar = () => {
    return (
        <header className="flex justify-between items-center p-4">
        <div className="text-xl font-bold tracking-wide">TONEMAKI™</div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">
            Vision
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Solutions
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Pricing
          </a>
        </nav>
        <button className="text-black bg-white px-4 py-2 rounded-full hover:bg-gray-300">
          Login
        </button>
      </header>
    );
}


export default Navbar;
