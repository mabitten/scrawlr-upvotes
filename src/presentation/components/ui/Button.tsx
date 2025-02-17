import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  'flex items-center justify-center cursor-pointer transition-colors rounded',
  {
    variants: {
      variant: {
        default: 'bg-gray-200 hover:bg-gray-300',
        selected: 'bg-gray-300 hover:bg-gray-200',
      },
      size: {
        medium: 'w-10 h-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {}

const Button: React.FC<ButtonProps> = ({ variant, size, ...props }) => {
  return <button className={buttonStyles({ variant, size })} {...props} />;
};

export default Button; 