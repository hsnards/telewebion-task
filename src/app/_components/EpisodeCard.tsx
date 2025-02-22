import { formatDuration } from '@/shared/utils/formatDuration';
import Image from 'next/image';
import { tv } from 'tailwind-variants';
import { PlayIcon } from '../page';

interface EpisodeCardProps {
  title: string;
  episodeName: string;
  imageUrl: string;
  duration: number;
  rate: number;
  season: number;
  episode: number;
  className?: string;
}

export function EpisodeCard({
  title,
  episodeName,
  imageUrl,
  duration,
  rate,
  season,
  episode,
  className,
}: EpisodeCardProps) {
  const styles = episodeCard();

  return (
    <div className={styles.base({ className })}>
      <div className={styles.imageContainer()}>
        <Image fill alt={title} src={imageUrl} className={styles.image()} />
        <div className={styles.duration()}>{formatDuration(duration)}</div>

        <div className={styles.playOverlay()}>
          <div className={styles.playButton()}>
            <PlayIcon />
          </div>
        </div>
      </div>
      <div className={styles.contentContainer()}>
        <div className={styles.titleContainer()}>
          <h3 className={styles.title()}>{title}</h3>
          <div className="flex items-center flex-shrink-0">
            <svg
              className="text-neutral-400"
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.80978 2.56677C6.51578 2.56677 6.24935 2.76465 6.12994 3.0717L4.75763 6.60049C4.72434 6.6861 4.70695 6.73026 4.6927 6.76134L4.69144 6.76408L4.68873 6.76429C4.65809 6.76655 4.61572 6.76677 4.53375 6.76677L4.20759 6.76677C3.99234 6.76676 3.80665 6.76676 3.6537 6.78104C3.49226 6.79611 3.3317 6.82939 3.17719 6.91936C2.9467 7.05359 2.75929 7.26776 2.64185 7.53119C2.56313 7.70776 2.534 7.89127 2.52081 8.07576C2.50832 8.25056 2.50832 8.46277 2.50833 8.70877V10.8914C2.50832 11.1374 2.50832 11.3497 2.52081 11.5245C2.534 11.7089 2.56313 11.8924 2.64185 12.069C2.75929 12.3325 2.9467 12.5466 3.17719 12.6808C3.3317 12.7708 3.49226 12.8041 3.6537 12.8192C3.80664 12.8335 3.99234 12.8334 4.20758 12.8334C4.39669 12.8334 4.55 12.6582 4.55 12.4421L4.55 8.63344C4.55 8.37571 4.73282 8.16677 4.95833 8.16677C5.18385 8.16677 5.36667 8.37571 5.36667 8.63344V12.0868C5.36667 12.3481 5.36667 12.4788 5.41117 12.5786C5.45032 12.6664 5.51279 12.7378 5.58962 12.7826C5.67697 12.8334 5.79131 12.8334 6.02 12.8334H8.6005C8.88583 12.8334 9.12272 12.8334 9.31763 12.8165C9.52113 12.7988 9.70872 12.7608 9.88983 12.667C10.173 12.5204 10.4137 12.2844 10.5836 11.9868C10.6923 11.7965 10.7536 11.5903 10.7999 11.3632C10.8442 11.1456 10.8802 10.878 10.9236 10.5557L11.1423 8.93101C11.1998 8.50404 11.2469 8.15398 11.2636 7.8683C11.2808 7.57354 11.2695 7.2985 11.1816 7.03487C11.0465 6.63008 10.7924 6.29159 10.4628 6.07743C10.2482 5.93796 10.0121 5.88344 9.75453 5.85804C9.50491 5.83343 9.19503 5.83343 8.81701 5.83344H8.47C8.34892 5.83344 8.28266 5.83308 8.23506 5.82863L8.22967 5.8281L8.22921 5.82194C8.22532 5.76754 8.225 5.69182 8.225 5.55344V4.18416C8.225 3.2909 7.59138 2.56677 6.80978 2.56677Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-footnote text-neutral-400">%{rate}</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className={styles.episodeName()}>{episodeName}</p>
          <p className="text-footnote text-neutral-400">
            فصل {season} قسمت {episode}
          </p>
        </div>
      </div>
    </div>
  );
}

const episodeCard = tv(
  {
    slots: {
      base: 'group cursor-pointer flex flex-row md:flex-col gap-3 md:gap-2',
      imageContainer:
        'relative w-[180px] md:w-full aspect-[16/10] md:aspect-video overflow-hidden flex-shrink-0 border border-neutral-900/80 rounded-[2px] text-white',
      image: 'object-cover transition-transform duration-300 group-hover:scale-105',
      duration:
        'absolute text-white text-footnote bottom-[1] left-[1] bg-black/80 px-1 py-0.5 rounded-[2px]',
      playOverlay:
        'absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300',
      playButton:
        'w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm',
      contentContainer: 'flex flex-col justify-center md:justify-start gap-1 flex-grow min-w-0',
      titleContainer: 'flex items-center justify-between text-neutral-200',
      title: 'text-caption line-clamp-1',
      episodeName: 'text-footnote text-neutral-400 line-clamp-1',
    },
  },
  {
    twMergeConfig: {
      extend: {
        classGroups: {
          'font-size': [{ text: ['footnote', 'caption', 'body'] }],
        },
      },
    },
  },
);
