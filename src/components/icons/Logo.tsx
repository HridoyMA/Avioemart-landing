import React from 'react';
import { Plane } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center shadow-sm">
        <Plane className="w-5 h-5 text-accent" />
      </div>
      <div>
        <div className="flex items-baseline">
          <span className="text-2xl text-primary tracking-tight">
            <span className="font-bold">Avio</span>
            <span className="font-light">emart</span>
          </span>
        </div>
        <div className="text-[10px] text-gray-500 -mt-0.5">
          AI-Powered Aviation Marketplace
        </div>
      </div>
    </div>
  );
};

