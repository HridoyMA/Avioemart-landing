import React from 'react';
import { ButtonProps } from '../../lib/types';
import { cn } from '../../lib/utils';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [&>svg]:shrink-0';
  
  const variants = {
    primary: 'bg-accent text-primary hover:bg-accent-hover shadow-xl hover:shadow-2xl',
    secondary: 'bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20',
    ghost: 'text-primary hover:bg-primary/5',
    blue: 'bg-primary text-white hover:bg-primary-dark',
  };
  
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-10 px-6 text-base',
    lg: 'h-10 px-8 py-6 text-lg',
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="[&>svg]:w-5 [&>svg]:h-5">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="[&>svg]:w-5 [&>svg]:h-5">{icon}</span>
      )}
    </button>
  );
};

