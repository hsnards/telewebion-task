'use client'
import { tv } from "tailwind-variants";
import { ComponentPropsWithoutRef, createContext, useContext, useState } from "react";
import { cn } from "@/shared/utils/cn";

type TabsContextValue = {
    selectedTab: string;
    onTabChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

const tabsStyles = tv({
    slots: {
        root: "flex flex-col w-full",
        list: "flex gap-2 border-b border-neutral-900",
        trigger: [
            "px-4 py-1 text-subtitle transition-all relative cursor-pointer",
            "text-gray-400 hover:text-gray-200",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500",
            "data-[state=active]:text-white data-[state=active]:border-b-1 data-[state=active]:border-primary",
            "data-[state=active]:bg-[linear-gradient(360deg,rgba(253,65,65,0.2)_0%,rgba(253,65,65,0)_100%)]"
        ],
        content: "py-4"
    }
});

export interface TabsProps extends ComponentPropsWithoutRef<"div"> {
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
    const [selectedTabInternal, setSelectedTabInternal] = useState(defaultValue ?? "");
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


export function TabList({ className, children, ...props }: ComponentPropsWithoutRef<"div">) {
    const { list } = tabsStyles();

    return (
        <div className={cn(list(), className)} role="tablist" {...props}>
            {children}
        </div>
    );
}

export interface TabTriggerProps extends ComponentPropsWithoutRef<"button"> {
    value: string;
}

export function TabTrigger({ value, className, children, ...props }: TabTriggerProps) {
    const context = useContext(TabsContext);
    if (!context) throw new Error("TabTrigger must be used within Tabs");

    const { selectedTab, onTabChange } = context;
    const { trigger } = tabsStyles();

    return (
        <button
            role="tab"
            onClick={() => onTabChange(value)}
            className={cn(trigger(), className)}
            aria-selected={selectedTab === value}
            data-state={selectedTab === value ? "active" : "inactive"}
            {...props}
        >
            {children}
        </button>
    );
}

export interface TabContentProps extends ComponentPropsWithoutRef<"div"> {
    value: string;
}

export function TabContent({ value, className, children, ...props }: TabContentProps) {
    const context = useContext(TabsContext);
    if (!context) throw new Error("TabContent must be used within Tabs");

    const { selectedTab } = context;
    const { content } = tabsStyles();

    if (selectedTab !== value) return null;

    return (
        <div
            className={cn(content(), className)}
            role="tabpanel"
            {...props}
        >
            {children}
        </div>
    );
} 