// Button Component Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

// Card Component Types
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  borderColor?: 'primary' | 'accent';
}

// Badge Component Types
export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
  icon?: React.ReactNode;
}

// Stat Card Types
export interface StatCardProps {
  value: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Partner Card Types
export interface PartnerCardProps {
  name: string;
  location: string;
  aircraft: string;
  isSpecial?: boolean;
}

// Feature Card Types
export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

