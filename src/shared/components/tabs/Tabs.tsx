'use client';
import { cn } from '@/shared/utils/cn';
import { ComponentPropsWithoutRef, createContext, useState } from 'react';
import { tv } from 'tailwind-variants';

export type TabsContextValue = {
  selectedTab: string;
  onTabChange: (value: string) => void;
};

export const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export const tabsStyles = tv({
  slots: {
    root: 'flex flex-col w-full',
    list: 'flex gap-2 border-b border-neutral-900 overflow-x-auto',
    trigger: [
      'px-4 py-1 text-subtitle transition-all relative cursor-pointer',
      'text-gray-400 hover:text-gray-200',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500',
      'data-[state=active]:text-white data-[state=active]:border-b-1 data-[state=active]:border-primary',
      'data-[state=active]:bg-[linear-gradient(360deg,rgba(253,65,65,0.2)_0%,rgba(253,65,65,0)_100%)]',
    ],
    content: 'py-4',
  },
});

export interface TabsProps extends ComponentPropsWithoutRef<'div'> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}: TabsProps) {
  const [selectedTabInternal, setSelectedTabInternal] = useState(defaultValue ?? '');
  const selectedTab = value ?? selectedTabInternal;

  const handleTabChange = (newValue: string) => {
    setSelectedTabInternal(newValue);
    onValueChange?.(newValue);
  };

  const { root } = tabsStyles();

  return (
    <TabsContext.Provider value={{ selectedTab, onTabChange: handleTabChange }}>
      <div className={cn(root(), className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}
