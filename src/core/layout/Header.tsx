'use client';

import { Button } from '@/shared/components/button/Button';
import { AccountIcon, ArrowRightIcon } from '@/shared/components/icons';
import { useScrollDirection } from '@/shared/hooks/use-scroll-direction';
import { cn } from '@/shared/utils/cn';
import Image from 'next/image';
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
        <Button variant="text" withIcon>
          <ArrowRightIcon />
        </Button>
        <Image
          src="/mobile-logo.png"
          alt="mobile-logo"
          width={56}
          height={40}
          className="h-5"
          priority
        />
        <Button variant="text" withIcon>
          <AccountIcon />
        </Button>
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
    root: 'px-1 md:px-0 flex items-center gap-2 justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-100 bg-foreground md:bg-transparent border-b border-b-[#ffffff1a] md:translate-y-0',
    navItem: [
      'text-body-small text-white px-2 py-1 cursor-pointer',
      'relative',
      'after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-white',
      'after:transition-all after:duration-300 after:transform after:-translate-x-1/2',
      'hover:after:w-full',
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
