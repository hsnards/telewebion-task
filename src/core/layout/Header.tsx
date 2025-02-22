'use client';

import { useScrollDirection } from '@/shared/hooks/use-scroll-direction';
import { cn } from '@/shared/utils/cn';
import { tv } from 'tailwind-variants';

export function Header() {
  const { isScrollingDown, lastScrollY } = useScrollDirection();
  const { root, navItem } = headerStyles();

  return (
    <header className={cn(root({ scrolled: lastScrollY > 0, isScrollingDown }))}>
      <div className="hidden md:flex md:items-center ">
        <img src="/logo.svg" alt="logo" />
        <div className="flex items-center gap-2">
          <a className={navItem()}>پخش زنده</a>
          <a className={navItem()}>فیلم و سریال</a>
          <a className={navItem()}>ویدیو</a>
          <a className={navItem()}>محتوا</a>
        </div>
      </div>

      <div className="contents md:hidden">
        <ArrowRightIcon />
        <img src="/mobile-logo.png" alt="mobile-logo" className="h-5" />
        <AccountIcon />
      </div>

      <div className="hidden md:flex md:items-center gap-1">
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
            stroke="#7B8794"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <a className={navItem()}>ورود / ثبت نام</a>
      </div>
    </header>
  );
}

const headerStyles = tv({
  slots: {
    root: 'px-2 md:px-0 flex items-center gap-2 justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-100 bg-foreground md:bg-transparent border-b border-b-[#ffffff1a] md:translate-y-0',
    navItem: [
      'text-body-small text-white px-2 py-1 cursor-pointer',
      'relative',
      'after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-white',
      'after:transition-all after:duration-300 after:transform after:-translate-x-1/2',
      'hover:after:w-full'
    ],
  },
  variants: {
    scrolled: {
      true: {
        root: 'md:bg-foreground',
      },
    },
    isScrollingDown: {
      true: {
        root: 'translate-y-[-100%]',
      },
      false: {
        root: 'translate-y-0',
      },
    },
  },
});

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.7459 19.7589C7.44784 19.4667 7.42074 19.0095 7.66461 18.6873L7.7459 18.595L14.4734 12L7.7459 5.40503C7.44784 5.11283 7.42074 4.65558 7.66461 4.33338L7.7459 4.24106C8.04396 3.94887 8.51037 3.9223 8.83904 4.16137L8.93321 4.24106L16.2541 11.418C16.5522 11.7102 16.5793 12.1675 16.3354 12.4897L16.2541 12.582L8.93321 19.7589C8.60534 20.0804 8.07376 20.0804 7.7459 19.7589Z"
      fill="#CBD2D9"
    />
  </svg>
);

const AccountIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
      stroke="#CBD2D9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
