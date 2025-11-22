import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl border-0 overflow-hidden relative p-12 md:p-16 text-center">
          {/* Decorative Blur Circles */}
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-accent/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative">
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Ready to Transform Your Procurement?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join hundreds of aviation professionals who save time and money with AI-powered procurement
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Start Free Trial
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Fine Print */}
            <p className="text-blue-200 text-sm">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

