import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../../lib/constants';
import { Button } from '../ui';
import { cn } from '../../lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [resourcesOpen, setResourcesOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-semibold text-primary">Menu</span>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {'hasDropdown' in link && link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setResourcesOpen(!resourcesOpen)}
                      className="w-full flex items-center justify-between p-3 text-primary hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        className={cn('w-4 h-4 transition-transform', resourcesOpen && 'rotate-180')}
                      />
                    </button>
                    {resourcesOpen && (
                      <div className="pl-4 mt-2 space-y-1">
                        <a href="#" className="block p-2 text-gray-600 hover:text-primary">
                          Documentation
                        </a>
                        <a href="#" className="block p-2 text-gray-600 hover:text-primary">
                          Help Center
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block p-3 text-primary hover:bg-gray-100 rounded-md transition-colors"
                    onClick={onClose}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Footer Actions */}
          <div className="p-4 border-t space-y-3">
            <Button
              variant="ghost"
              size="md"
              className="w-full justify-center"
              onClick={onClose}
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={onClose}
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

