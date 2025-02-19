const Navbar = () => {
  return (
      <header className="relative flex items-center p-4">
          <div className="text-xl font-bold tracking-wide">JULIO²³ᶠ</div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
              <nav className="space-x-6">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Compétences
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Réalisations
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Formation
                  </a>
              </nav>
          </div>
      </header>
  );
}

export default Navbar;
