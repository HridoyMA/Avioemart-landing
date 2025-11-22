import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe 
} from 'lucide-react';
import { FEATURES } from '../../lib/constants';

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  'sparkles': <Sparkles />,
  'message-square': <MessageSquare />,
  'chart-column': <BarChart3 />,
  'shield': <Shield />,
  'zap': <Zap />,
  'globe': <Globe />,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100">
      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-6">
        <span className="text-accent [&>svg]:w-7 [&>svg]:h-7">
          {icon}
        </span>
      </div>
      <h3 className="text-xl text-primary mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-primary mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive features designed for the aviation industry
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={iconMap[feature.icon] || <Sparkles />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

