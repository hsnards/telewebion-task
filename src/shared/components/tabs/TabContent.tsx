'use client';
import { cn } from '@/shared/utils/cn';
import { ComponentPropsWithoutRef, useContext } from 'react';
import { TabsContext, tabsStyles } from './Tabs';

export interface TabContentProps extends ComponentPropsWithoutRef<'div'> {
  value: string;
}

export function TabContent({ value, className, children, ...props }: TabContentProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabContent must be used within Tabs');

  const { selectedTab } = context;
  const { content } = tabsStyles();

  if (selectedTab !== value) return null;

  return (
    <div className={cn(content(), className)} role="tabpanel" {...props}>
      {children}
    </div>
  );
}
