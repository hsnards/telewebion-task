'use client';

import { cn } from '@/shared/utils/cn';
import { ComponentPropsWithoutRef } from 'react';
import { tabsStyles } from './Tabs';

export function TabList({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  const { list } = tabsStyles();

  return (
    <div className={cn(list(), className)} role="tablist" {...props}>
      {children}
    </div>
  );
}
