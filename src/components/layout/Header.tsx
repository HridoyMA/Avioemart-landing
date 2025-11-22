import React, { useState } from 'react';
import { Menu, ChevronDown, LogIn } from 'lucide-react';
import { Logo } from '../icons/Logo';
import { Button } from '../ui';
import { MobileMenu } from './MobileMenu';
import { NAV_LINKS } from '../../lib/constants';
import { cn } from '../../lib/utils';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };

    if (resourcesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [resourcesOpen]);

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left Side */}
            <button 
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Go to homepage"
            >
              <Logo />
            </button>

            {/* Desktop Navigation & CTA - Right Side (All Together) */}
            <div className="hidden md:flex items-center gap-6" role="menubar">
              {/* Navigation Links */}
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative" role="none" ref={'hasDropdown' in link && link.hasDropdown ? dropdownRef : null}>
                  {'hasDropdown' in link && link.hasDropdown ? (
                    <div className="relative">
                      <button 
                        className="flex items-center gap-1 text-primary hover:text-primary-dark transition-colors"
                        onClick={toggleResources}
                        aria-haspopup="true"
                        aria-expanded={resourcesOpen}
                        aria-label={`${link.label} menu`}
                      >
                        {link.label}
                        <ChevronDown className={cn('w-4 h-4 transition-transform', resourcesOpen && 'rotate-180')} aria-hidden="true" />
                      </button>
                      {resourcesOpen && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                          role="menu"
                          aria-label="Resources submenu"
                        >
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                            role="menuitem"
                            onClick={() => setResourcesOpen(false)}
                          >
                            Documentation
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                            role="menuitem"
                            onClick={() => setResourcesOpen(false)}
                          >
                            Help Center
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary hover:text-primary-dark transition-colors"
                      role="menuitem"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Sign In Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                role="menuitem"
                aria-label="Sign in to your account"
              >
                <LogIn className="w-4 h-4" aria-hidden="true" />
                Sign In
              </a>
              
              {/* Get Started Free Button */}
              <Button variant="blue" size="md">
                Get Started Free
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

