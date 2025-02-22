import { cn } from '@/shared/utils/cn';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'h-6 px-2 py-2 rounded-[2px] text-body text-white transition-colors inline-flex items-center gap-1.5 hover:bg-white/10 cursor-pointer inline-flex justify-center',
  variants: {
    variant: {
      primary: 'bg-primary',
      outlined: 'border-1 border-neutral-400 bg-transparent',
    },
    withIcon: {
      true: 'p-1 w-5 h-5',
    },
  },
  defaultVariants: {
    withIcon: false,
    variant: 'primary',
  },
});

interface ButtonProps extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof button> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Button = ({
  className,
  variant,
  startIcon,
  endIcon,
  children,
  withIcon,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(button({ variant, withIcon }), className)} {...props}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

Button.displayName = 'Button';
