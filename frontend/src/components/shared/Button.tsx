
import { motion, HTMLMotionProps } from 'framer-motion';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
const MotionButton = motion(
  forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<'button'>>(
    (props, ref) => <button ref={ref} {...props} />
  )
);

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  isLoading = false,
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-accent hover:bg-accent-dark text-white focus:ring-accent',
    secondary: 'bg-primary hover:bg-primary-light text-white focus:ring-primary',
    outline: 'border border-accent text-accent hover:bg-accent/10 focus:ring-accent',
    ghost: 'bg-transparent hover:bg-gray-100/10 text-text-primary focus:ring-gray-500'
  };

  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const buttonStyle = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

  return (
    <MotionButton
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonStyle}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </MotionButton>
  );
};

export default Button;