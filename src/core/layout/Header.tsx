'use client';

import { Button } from '@/shared/components/button/Button';
import { AccountIcon, ArrowRightIcon, SearchIcon } from '@/shared/components/icons';
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
        <Image src="/logo.svg" alt="logo" width={48} height={48} priority />
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
          src="/mobile-logo.svg"
          alt="mobile-logo"
          width={32}
          height={32}
          className="h-5"
          priority
        />
        <Button variant="text" withIcon>
          <AccountIcon />
        </Button>
      </div>

      <div className="hidden md:flex md:items-center text-white">
        <Button variant="text" withIcon>
          <SearchIcon />
        </Button>

        <Button variant="text" className="text-caption">
          <a>ورود / ثبت نام</a>
        </Button>
      </div>
    </header>
  );
}

const headerStyles = tv({
  slots: {
    root: 'px-1 md:px-0 flex items-center gap-2 justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#000000] md:bg-transparent border-b border-b-[#ffffff1a] md:translate-y-0',
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
