import { Button } from '@/shared/components/button/Button';
import { Container } from '@/shared/components/container/Container';
import {
  BookmarkIcon,
  DislikeIcon,
  DownloadIcon,
  LikeIcon,
  PlayIcon,
} from '@/shared/components/icons';
import { Tag } from '@/shared/components/tag/tag';
import Image from 'next/image';
import { Fragment } from 'react';
import { SeasonList } from './_components/SeasonList';

export default function Home() {
  return (
    <main className="animate-blink transition-opacity duration-200 ease-in-out pt-5 md:pt-0">
      <div className="flex flex-col gap-4">
        <section className="grid  w-full">
          <div className="h-[216px] sm:h-[486px] lg:h-[586px] col-start-1 row-start-1 relative">
            <Image
              src="/banner.png"
              alt="Hero background"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="col-start-1 row-start-1 relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(270deg,rgb(0,0,0)_0%,rgba(0,0,0,0.75)_10%,rgba(0,0,0,0.5)_30%,rgba(0,0,0,0)_60%),linear-gradient(rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_75%,rgb(0,0,0)_100%),linear-gradient(rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_7rem)]" />

          <div className="col-start-1 row-start-2 sm:col-start-1 sm:row-start-1  z-10 flex flex-col justify-center text-white">
            <Container className="text-center md:text-right">
              <Image
                alt="logo"
                src="/series-logo.png"
                width={400}
                height={155}
                className="mb-5 hidden md:block"
                priority
              />
              <h1 className="text-title font-bold mb-1">هانیبال | Hannibal</h1>
              <div className=" mb-1">
                <MetadataList
                  items={[
                    '43 دقیقه',
                    'آمریکا',
                    '۳ فصل(۳۹ قسمت)',
                    'دوبله فارسی',
                    'مناسب برای بالای ۱۸ سال',
                  ]}
                />
              </div>
              <div className="flex mb-4 justify-center md:justify-start gap-0.5">
                <Tag label="روانشناسی" />
                <Tag label="جنایی" />
                <Tag label="درام" />
                <Tag label="دلهره‌آور" />
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center mb-2">
                <Button className="md:w-fit w-full hover:bg-primary/70" startIcon={<PlayIcon />}>
                  پخش
                </Button>
                <div className="flex  gap-1 items-center">
                  <Button variant="outlined" withIcon>
                    <DownloadIcon />
                  </Button>
                  <Button variant="outlined" withIcon>
                    <BookmarkIcon />
                  </Button>
                </div>
                <div className="flex gap-1 items-center">
                  <Button variant="outlined" withIcon>
                    <LikeIcon />
                  </Button>
                  <Button variant="outlined" withIcon>
                    <DislikeIcon />
                  </Button>
                </div>
              </div>
              <p className="text-body max-w-2xl line-clamp-2">
                ویل گراهام ، یک متخصص جنایی FBI ، توانایی غیرقابل انکار و همدردی با دکتر هانیبال لکر
                ، روانپزشک پزشکی قانونی را دارد. با این حال ، او از این که آدمخوار است آگاهی ندارد و
                ویل گراهام، نمایه‌گر اف‌بی‌آی، توسط جک کرافورد، رئیس علوم رفتاری اف‌بی‌آی، برای کمک
                به تحقیق در مورد یک قاتل زنجیره‌ای در مینه‌سوتا استخدام می‌شود. کرافورد تصمیم می
                گیرد که او را تحت نظارت روانپزشک قانونی دکتر هانیبال لکتر قرار دهد.
              </p>
            </Container>
          </div>
        </section>
      </div>
      <Container>
        <div className="py-4 md:py-10">
          <SeasonList />
        </div>
      </Container>
    </main>
  );
}

interface MetadataListProps {
  items: string[];
}

export function MetadataList({ items }: MetadataListProps) {
  return (
    <div className="text-neutral-200">
      {items.map((item, index) => (
        <Fragment key={item}>
          <span key={item} className="text-caption">
            {item}
          </span>
          {index < items.length - 1 && (
            <span className="inline-block text-[6px] w-[3px] h-[3px] bg-current rounded-full mx-[6px]" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
