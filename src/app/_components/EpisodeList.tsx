import { EpisodeCard } from './EpisodeCard';

export const SEASON_ONE_EPISODES = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  title: 'مرد آهنی: انتقام برای آزادی',
  episodeName: [
    'رستاخیز فرشتگان',
    'نبرد سرنوشت',
    'راز پنهان',
    'آخرین مبارزه',
    'شروع طوفان',
    'سایه‌های گذشته',
    'نقطه شکست',
    'مسیر بازگشت',
    'دشمن پنهان',
    'اتحاد نهایی',
    'نبرد درون',
    'آخرین امید',
    'راز باستانی',
    'نقطه بازگشت',
    'مسیر سرنوشت',
    'پایان راه',
  ][i],
  imageUrl: '/banner.png',
  duration: [93, 105, 98, 102, 97, 101, 99, 104, 96, 103, 100, 105, 98, 102, 97, 106][i],
  rate: 95 - i * 2,
  season: 1,
  episode: i + 1,
}));

export const SEASON_TWO_EPISODES = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  title: 'مرد آهنی: انتقام برای آزادی',
  episodeName: [
    'شروع دوباره',
    'سایه تاریکی',
    'نبرد بزرگ',
    'رازهای گذشته',
    'مسیر انتقام',
    'آخرین فرصت',
    'نقطه شکست',
    'اتحاد قهرمانان',
    'نبرد نهایی',
    'سرنوشت تاریک',
    'راز پنهان',
    'آخرین نبرد',
    'مسیر رستگاری',
    'نقطه پایان',
    'آخرین امید',
    'سرنوشت نهایی',
  ][i],
  imageUrl: '/banner.png',
  duration: [105, 98, 102, 99, 101, 97, 103, 100, 104, 98, 102, 105, 99, 103, 101, 106][i],
  rate: 98 - i * 2,
  season: 2,
  episode: i + 1,
}));

interface EpisodeListProps {
  episodes: typeof SEASON_ONE_EPISODES;
}

export function EpisodeList({ episodes }: EpisodeListProps) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {episodes.map((episode) => (
        <EpisodeCard
          key={episode.id}
          title={episode.title}
          episodeName={episode.episodeName}
          imageUrl={episode.imageUrl}
          duration={episode.duration}
          rate={episode.rate}
          season={episode.season}
          episode={episode.episode}
          className="md:flex-col"
        />
      ))}
    </div>
  );
}
