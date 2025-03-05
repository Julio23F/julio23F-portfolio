const Navbar = () => {
  return (
      <header className="relative flex items-center p-4" style={{zIndex: 5}}>
          <div className="text-xl font-bold tracking-wide">JULIO²³ᶠ</div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
              <nav className="space-x-6">
                  <a href="#about" className="text-gray-300 hover:text-white">
                    À propos
                  </a>
                  <a href="#projects" className="text-gray-300 hover:text-white">
                    Réalisations
                  </a>
                  <a href="#infoContact" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
              </nav>
          </div>
      </header>
  );
}

export default Navbar;
