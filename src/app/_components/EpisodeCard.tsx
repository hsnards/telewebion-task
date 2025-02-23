import { PlayIcon, ThumbUpIcon } from '@/shared/components/icons';
import { formatDuration } from '@/shared/utils/formatDuration';
import Image from 'next/image';
import { tv } from 'tailwind-variants';

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
          <div className="flex items-center flex-shrink-0 order-4">
            <ThumbUpIcon />
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
      base: 'group cursor-pointer flex flex-row md:flex-col gap-1 md:gap-2',
      imageContainer:
        'relative w-[150px] md:w-full aspect-[16/10] md:aspect-video overflow-hidden flex-shrink-0 border border-neutral-900/80 rounded-[2px] text-white',
      image: 'object-cover transition-transform duration-300 group-hover:scale-105',
      duration:
        'absolute text-white text-footnote bottom-[1] left-[1] bg-black/80 px-1 py-0.5 rounded-[2px]',
      playOverlay:
        'absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300',
      playButton:
        'w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm',
      contentContainer: 'flex flex-col justify-center md:justify-start gap-1 flex-grow min-w-0',
      titleContainer: 'contents md:flex items-center justify-between text-neutral-200',
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
