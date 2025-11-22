import React from 'react';
import { BadgeProps } from '../../lib/types';
import { cn } from '../../lib/utils';

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
  icon,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden';
  
  const variants = {
    default: 'bg-accent/20 backdrop-blur-sm border border-accent/30 text-white px-4 py-2',
    success: 'bg-green-100 text-green-800 border border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    error: 'bg-red-100 text-red-800 border border-red-200',
  };
  
  return (
    <span
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
    >
      {icon && <span className="[&>svg]:size-3 [&>svg]:pointer-events-none">{icon}</span>}
      {children}
    </span>
  );
};

