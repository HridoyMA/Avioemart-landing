import React from 'react';
import { CardProps } from '../../lib/types';
import { cn } from '../../lib/utils';

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  borderColor = 'primary',
}) => {
  const baseStyles = 'bg-card text-card-foreground rounded-xl border-2 transition-all';
  
  const borderColors = {
    primary: 'border-primary/20 hover:border-primary',
    accent: 'border-accent/30 hover:border-accent',
  };
  
  const hoverStyles = hover ? 'hover:shadow-xl group' : '';
  
  return (
    <div
      className={cn(
        baseStyles,
        borderColors[borderColor],
        hoverStyles,
        className
      )}
    >
      {children}
    </div>
  );
};

