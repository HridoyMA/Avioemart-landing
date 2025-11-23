'use client';

import React from 'react';
import { Sparkles, ArrowRight, LogIn } from 'lucide-react';
import { Button } from '../ui';
import { Badge } from '../ui';
import { useCounter } from '../../lib/hooks/useCounter';

interface StatCardProps {
  value: number | string;
  suffix?: string;
  label: string;
  prefix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, suffix, label, prefix }) => {
  // Only animate if value is a number
  const isNumber = typeof value === 'number';
  const { count, elementRef } = useCounter(isNumber ? value : 0, {
    duration: 2000,
    startOnMount: false,
  });

  const displayValue = isNumber ? count : value;

  return (
    <div
      ref={elementRef}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
    >
      <div className="text-4xl text-white mb-2">
        {prefix}
        {typeof displayValue === 'number' ? displayValue.toLocaleString() : displayValue}
        {suffix}
      </div>
      <div className="text-blue-200">{label}</div>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  // Grid pattern SVG as data URL
  const gridPattern =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=';

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark"
      aria-label="Hero section"
    >
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("${gridPattern}")`,
        }}
      />

      {/* Decorative Blur Circles */}
      <div className="absolute top-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge icon={<Sparkles className="w-4 h-4" />} className="mb-6">
            AI-Powered Aviation Marketplace
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
            <span className="font-bold">Avio</span>
            <span className="font-thin">emart</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-4">
            The Intelligent Platform for Aircraft Parts
          </p>

          {/* Description */}
          <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
            Connect buyers and suppliers worldwide with AI-powered RFQs, automated quoting, and
            smart procurement workflows that save time and reduce costs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Get Started Free
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<LogIn className="w-5 h-5" />}
              iconPosition="left"
            >
              Sign In
            </Button>
          </div>

          {/* Statistics Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
            role="list"
            aria-label="Key statistics"
          >
            <div role="listitem">
              <StatCard value={15000} suffix="+" label="Aircraft Parts" />
            </div>
            <div role="listitem">
              <StatCard value={500} suffix="+" label="Verified Suppliers" />
            </div>
            <div role="listitem">
              <StatCard value="<2hrs" label="Response Time" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
