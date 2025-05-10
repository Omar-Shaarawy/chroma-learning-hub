
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // For demo purposes, we'll consider the user as logged in
  const isLoggedIn = true;

  return (
    <header className="border-b bg-white fixed w-full z-50" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
              أستاذي
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-600 hover:text-purple-500 transition-colors">
              الدورات
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-purple-500 transition-colors">
              الأسعار
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-500 transition-colors">
              من نحن
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline">
                    <LayoutDashboard className="ml-2 h-4 w-4" />
                    لوحة التحكم
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline">تسجيل الخروج</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <Button variant="outline">تسجيل الدخول</Button>
                </Link>
                <Link to="/signup">
                  <Button>إنشاء حساب</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-2 pb-4">
            <Link to="/courses" className="px-4 py-2 rounded-md hover:bg-gray-100">
              الدورات
            </Link>
            <Link to="/pricing" className="px-4 py-2 rounded-md hover:bg-gray-100">
              الأسعار
            </Link>
            <Link to="/about" className="px-4 py-2 rounded-md hover:bg-gray-100">
              من نحن
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard">
                    <Button variant="outline" className="w-full">
                      <LayoutDashboard className="ml-2 h-4 w-4" />
                      لوحة التحكم
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button variant="outline" className="w-full">تسجيل الخروج</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signin">
                    <Button variant="outline" className="w-full">تسجيل الدخول</Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="w-full">إنشاء حساب</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
