import { cn } from '@/shared/utils/cn';
import { ComponentPropsWithoutRef } from 'react';

export const Container = ({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={cn(
        'container mx-auto px-2 sm:px-4 lg:px-8 xl:px-[60px] max-w-[1500px]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Container.displayName = 'Container';
