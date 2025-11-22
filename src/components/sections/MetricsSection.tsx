import React from 'react';
import { DollarSign, Clock, TrendingUp, Users } from 'lucide-react';
import { StatCard } from '../ui';
import { METRICS } from '../../lib/constants';

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  'dollar-sign': <DollarSign />,
  'clock': <Clock />,
  'trending-up': <TrendingUp />,
  'users': <Users />,
};

export const MetricsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((metric) => (
            <StatCard
              key={metric.id}
              value={metric.value}
              title={metric.title}
              description={metric.description}
              icon={iconMap[metric.icon] || <DollarSign />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

