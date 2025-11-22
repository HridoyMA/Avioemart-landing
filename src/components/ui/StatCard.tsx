import React from 'react';
import { StatCardProps } from '../../lib/types';
import { cn } from '../../lib/utils';

export const StatCard: React.FC<StatCardProps> = ({
  value,
  title,
  description,
  icon,
}) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <span className="text-accent [&>svg]:w-8 [&>svg]:h-8">
          {icon}
        </span>
      </div>
      <div className="text-5xl text-white mb-2 font-bold">{value}</div>
      <div className="text-xl text-white mb-1 font-medium">{title}</div>
      <div className="text-blue-200 text-sm">{description}</div>
    </div>
  );
};

