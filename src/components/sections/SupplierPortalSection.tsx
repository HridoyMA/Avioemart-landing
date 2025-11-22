import React from 'react';
import { Building2, Globe, Shield, CheckCircle } from 'lucide-react';
import { Card } from '../ui';

interface Partner {
  name: string;
  location: string;
  aircraft: string;
}

const PARTNERS: Partner[] = [
  { name: 'Singapore Airlines', location: 'Singapore', aircraft: '150+ Aircraft' },
  { name: 'Cathay Pacific Airways', location: 'Hong Kong', aircraft: '200+ Aircraft' },
  { name: 'Qatar Airways', location: 'Qatar', aircraft: '250+ Aircraft' },
  { name: 'Thai Airways International', location: 'Thailand', aircraft: '80+ Aircraft' },
  { name: 'Air Niugini', location: 'Papua New Guinea', aircraft: '30+ Aircraft' },
];

const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => {
  return (
    <div className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-accent/50 transition-all duration-300">
      {/* Checkmark Badge */}
      <div className="absolute top-4 right-4">
        <div className="bg-accent rounded-full p-1">
          <CheckCircle className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Building2 className="w-8 h-8 text-primary" />
      </div>

      {/* Content */}
      <h3 className="text-xl text-white mb-2">{partner.name}</h3>
      <div className="flex items-center gap-2 text-gray-300 mb-3">
        <Globe className="w-4 h-4" />
        <span className="text-sm">{partner.location}</span>
      </div>
      <div className="text-accent text-sm">{partner.aircraft}</div>
    </div>
  );
};

const AndManyMoreCard: React.FC = () => {
  return (
    <div className="group relative bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm border border-accent/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-accent transition-all duration-300">
      <div className="text-6xl text-accent mb-4">+</div>
      <h3 className="text-xl text-white mb-2">And Many More</h3>
      <p className="text-gray-300 text-sm">Join our growing network of aviation partners</p>
    </div>
  );
};

export const SupplierPortalSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm tracking-wide">Trusted Partner Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Integrated Supplier Portal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Powering procurement operations for leading airlines across Asia-Pacific and beyond
          </p>
        </div>

        {/* Partner Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PARTNERS.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
          <AndManyMoreCard />
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="text-center">
            <div className="text-4xl text-accent mb-2">99.8%</div>
            <div className="text-white mb-1">Platform Uptime</div>
            <div className="text-gray-400 text-sm">Reliable 24/7 access</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-accent mb-2">500K+</div>
            <div className="text-white mb-1">Parts Catalogued</div>
            <div className="text-gray-400 text-sm">Comprehensive inventory</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-accent mb-2">ISO 27001</div>
            <div className="text-white mb-1">Security Certified</div>
            <div className="text-gray-400 text-sm">Enterprise-grade security</div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            Trusted by procurement teams worldwide for mission-critical aviation parts
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full border border-white/20">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-white">Enterprise-Grade Security & Compliance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

