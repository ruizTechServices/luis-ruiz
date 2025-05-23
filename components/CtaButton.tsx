import React from 'react';

interface CtaButtonProps {
  text: string;
  onClick?: () => void;
  variant: 'primary' | 'outline';
}

const CtaButton: React.FC<CtaButtonProps> = ({ text, onClick, variant }) => {
  const baseStyle = "px-6 py-3 rounded-md font-medium transition-colors";
  // Using text-textLight from the theme for better contrast with primary background
  const primaryStyle = `bg-primary hover:bg-primary-dark text-textLight shadow-md hover:shadow-lg ${baseStyle}`;
  const outlineStyle = `border-2 border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20 ${baseStyle}`;

  return (
    <button
      onClick={onClick}
      className={variant === 'primary' ? primaryStyle : outlineStyle}
    >
      {text}
    </button>
  );
};

export default CtaButton;
