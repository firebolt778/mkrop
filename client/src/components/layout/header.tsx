import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    // { name: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm fixed w-full top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="/favicon.png" />
            </div>
            <span className="text-2xl font-bold text-secondary dark:text-white">MKrop.com</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors",
                  isActive(item.href) && "text-primary font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/contact">
              <Button className="bg-primary text-white hover:bg-blue-700">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors",
                    isActive(item.href) && "text-primary font-medium"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-primary text-white hover:bg-blue-700 w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
