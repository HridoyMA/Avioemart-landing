import React from 'react';
import { ShoppingCart, Store, Brain, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../ui';
import { Card } from '../ui';
import { cn } from '../../lib/utils';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, iconBgColor }) => {
  return (
    <div className="flex items-start gap-4">
      <div
        className={cn(
          'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1',
          iconBgColor
        )}
      >
        <span className="text-primary [&>svg]:w-5 [&>svg]:h-5">{icon}</span>
      </div>
      <div>
        <h4 className="text-lg mb-1 text-primary font-semibold">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export const ProfessionalsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-primary mb-4 font-bold">
            Built for Aviation Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you&apos;re procuring parts or selling them, we&apos;ve built the perfect
            solution
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Buyers Card */}
          <Card hover borderColor="primary" className="flex flex-col gap-6 p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-3xl text-primary font-bold">For Buyers</h3>
                <p className="text-gray-600">Airlines • MROs • Operators</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <FeatureItem
                icon={<Brain className="w-5 h-5" />}
                title="AI-Powered Search"
                description="Find parts instantly with intelligent matching across 15,000+ certified components"
                iconBgColor="bg-primary/10"
              />
              <FeatureItem
                icon={<Zap className="w-5 h-5" />}
                title="Fast Procurement"
                description="Complete RFQs in 12 minutes vs 38 minutes manual. Save 68% of your time"
                iconBgColor="bg-primary/10"
              />
              <FeatureItem
                icon={<TrendingUp className="w-5 h-5" />}
                title="Cost Savings"
                description="Compare quotes from 500+ suppliers. Save an average of 17% on every purchase"
                iconBgColor="bg-primary/10"
              />
            </div>

            <Button
              variant="blue"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="w-full group-hover:scale-[1.02] transition-transform"
            >
              Start Buying Parts
            </Button>
          </Card>

          {/* For Suppliers Card */}
          <Card hover borderColor="accent" className="flex flex-col gap-6 p-10 border-accent/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-hover rounded-2xl flex items-center justify-center">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl text-primary font-bold">For Suppliers</h3>
                <p className="text-gray-600">Distributors • OEMs • Dealers</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <FeatureItem
                icon={<Brain className="w-5 h-5" />}
                title="AI Auto-Quoting"
                description="Automatically respond to RFQs in seconds. Save 90% of quoting time"
                iconBgColor="bg-accent/20"
              />
              <FeatureItem
                icon={<Zap className="w-5 h-5" />}
                title="Global Reach"
                description="Access buyers worldwide. Get matched to relevant RFQs automatically"
                iconBgColor="bg-accent/20"
              />
              <FeatureItem
                icon={<TrendingUp className="w-5 h-5" />}
                title="Grow Revenue"
                description="Smart pricing and analytics help increase revenue by an average of 35%"
                iconBgColor="bg-accent/20"
              />
            </div>

            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="w-full bg-accent hover:bg-accent-hover text-primary group-hover:scale-[1.02] transition-transform"
            >
              Start Selling Parts
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
