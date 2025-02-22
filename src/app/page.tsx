import { Button } from '@/shared/components/button/Button';
import { Container } from '@/shared/components/container/Container';
import { Tag } from '@/shared/components/tag/tag';
import { SeasonList } from './_components/SeasonList';

export default function Home() {
  return (
    <main className="animate-blink transition-opacity duration-200 ease-in-out pt-5 md:pt-0">
      <div className="flex flex-col gap-4">
        <section className="grid h-[300px] sm:h-[486px] lg:h-[586px] w-full ">
          <img
            src="/banner.png"
            alt="Hero background"
            className="w-full h-full object-cover col-start-1 row-start-1"
          />
          <div className="col-start-1 row-start-1 relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(270deg,rgb(0,0,0)_0%,rgba(0,0,0,0.75)_10%,rgba(0,0,0,0.5)_30%,rgba(0,0,0,0)_60%),linear-gradient(rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_75%,rgb(0,0,0)_100%),linear-gradient(rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_7rem)]" />

          <div className="col-start-1 sm:row-start-1 z-10 flex flex-col justify-center text-white">
            <Container className="text-center md:text-right">
              <img
                alt="logo"
                src="/series-logo.png"
                className="w-[400px] h-[155px] mb-5 hidden md:block"
              />
              <h1 className="text-title font-bold mb-1">هانیبال | Hannibal</h1>
              <p className="text-caption text-neutral-200 mb-4">مناسب برای بالای ۱۸ سال</p>
              <div className="flex mb-2 justify-center md:justify-start gap-0.5">
                <Tag label="روانشناسی" />
                <Tag label="جنایی" />
                <Tag label="درام" />
                <Tag label="دلهره‌آور" />
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center mb-4">
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
        <div className="py-18">
          <SeasonList />
        </div>
      </Container>
    </main>
  );
}

export const PlayIcon = () => (
  <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.00625 1.8023C4.0182 1.81028 4.03019 1.81827 4.04222 1.82629L14.591 8.85878C14.8962 9.06222 15.1792 9.25086 15.3965 9.42614C15.6234 9.60908 15.8908 9.86275 16.0447 10.2339C16.2481 10.7244 16.2481 11.2756 16.0447 11.7661C15.8908 12.1372 15.6234 12.3909 15.3965 12.5738C15.1792 12.7491 14.8962 12.9377 14.591 13.1412L4.00628 20.1977C3.63319 20.4464 3.29772 20.6701 3.01305 20.8244C2.72818 20.9788 2.33717 21.1552 1.8808 21.1279C1.29705 21.0931 0.757793 20.8045 0.404984 20.3381C0.12916 19.9735 0.0590496 19.5503 0.0294864 19.2276C-5.5423e-05 18.9052 -2.82425e-05 18.502 1.91746e-06 18.0536L3.82481e-06 3.98962C3.82481e-06 3.97516 2.87113e-06 3.96075 1.91746e-06 3.94638C-2.82425e-05 3.49798 -5.5423e-05 3.09479 0.0294864 2.77236C0.0590496 2.44971 0.12916 2.02651 0.404984 1.6619C0.757793 1.19552 1.29705 0.906923 1.8808 0.872069C2.33717 0.84482 2.72818 1.02123 3.01305 1.17561C3.29771 1.32988 3.63317 1.55355 4.00625 1.8023Z"
      fill="white"
    />
  </svg>
);

export const DownloadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BookmarkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LikeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DislikeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 2V13M22 9.8V5.2C22 4.07989 22 3.51984 21.782 3.09202C21.5903 2.71569 21.2843 2.40973 20.908 2.21799C20.4801 2 19.9201 2 18.8 2H8.118C6.65652 2 5.92578 2 5.33557 2.26743C4.81539 2.50314 4.37329 2.88242 4.06123 3.36072C3.70716 3.90339 3.59605 4.62564 3.37382 6.07012L2.85074 9.47012C2.55764 11.3753 2.41108 12.3279 2.6938 13.0691C2.94193 13.7197 3.40864 14.2637 4.01391 14.6079C4.70352 15 5.66732 15 7.59493 15H8.39999C8.96004 15 9.24007 15 9.45398 15.109C9.64214 15.2049 9.79512 15.3578 9.891 15.546C9.99999 15.7599 9.99999 16.0399 9.99999 16.6V19.5342C9.99999 20.896 11.104 22 12.4658 22C12.7907 22 13.085 21.8087 13.2169 21.5119L16.5777 13.9502C16.7305 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1657 13.1115 17.3109 13.0592C17.4752 13 17.6634 13 18.0398 13H18.8C19.9201 13 20.4801 13 20.908 12.782C21.2843 12.5903 21.5903 12.2843 21.782 11.908C22 11.4802 22 10.9201 22 9.8Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
