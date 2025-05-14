
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Asset Tracker", path: "/asset-tracker" }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <ShieldCheck className="w-8 h-8 text-navy-800 mr-2" />
              <span className="text-2xl font-bold text-navy-900">Fortis<span className="text-gold-500">Shield</span></span>
            </Link>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(link.path)
                    ? "bg-navy-800 text-white"
                    : "text-navy-600 hover:bg-navy-100 hover:text-navy-900"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Button 
              variant="secondary" 
              className="ml-4 bg-gold-500 hover:bg-gold-600 text-navy-900 px-6"
            >
              Client Portal
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-navy-800 hover:text-navy-900 hover:bg-navy-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "bg-navy-800 text-white"
                    : "text-navy-600 hover:bg-navy-100 hover:text-navy-900"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-100">
              <Button 
                variant="secondary" 
                className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900"
              >
                Client Portal
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
