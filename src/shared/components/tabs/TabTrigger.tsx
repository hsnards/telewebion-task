'use client';
import { cn } from '@/shared/utils/cn';
import { ComponentPropsWithoutRef, useContext } from 'react';
import { TabsContext, tabsStyles } from './Tabs';

export interface TabTriggerProps extends ComponentPropsWithoutRef<'button'> {
  value: string;
}

export function TabTrigger({ value, className, children, ...props }: TabTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabTrigger must be used within Tabs');

  const { selectedTab, onTabChange } = context;
  const { trigger } = tabsStyles();

  return (
    <button
      role="tab"
      onClick={() => onTabChange(value)}
      className={cn(trigger(), className)}
      aria-selected={selectedTab === value}
      data-state={selectedTab === value ? 'active' : 'inactive'}
      {...props}
    >
      {children}
    </button>
  );
}
