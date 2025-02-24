import { Episode, Series } from '../types/series';

const generateEpisodes = (seasonNumber: number, count: number): Episode[] => {
  const episodeNames = {
    1: [
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
      // Additional episodes for pagination demo
      'فراتر از مرزها',
      'نبرد نهایی',
      'سرنوشت مقدر',
      'آخرین ایستگاه',
    ],
    2: [
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
      // Additional episodes for pagination demo
      'راه بی‌پایان',
      'آخرین نور',
      'مسیر تاریکی',
      'سپیده‌دم',
    ],
    3: [
      'فصل جدید',
      'راه بی‌پایان',
      'نبرد سرنوشت‌ساز',
      'رازهای کهن',
      'مسیر رستگاری',
      'آخرین نفس',
      'نقطه عطف',
      'اتحاد ابدی',
      'نبرد پایانی',
      'سرنوشت روشن',
      'راز نهایی',
      'آخرین فصل',
      'مسیر آزادی',
      'نقطه آغاز',
      'امید تازه',
      'پایان داستان',
      // Additional episodes for pagination demo
      'فراسوی افق',
      'آخرین پرده',
      'مسیر جاودانگی',
      'طلوع دوباره',
    ],
  };

  return Array.from({ length: count }, (_, i) => ({
    episode: i + 1,
    title: 'هانیبال',
    season: seasonNumber,
    imageUrl: `/episode-images/image-${i + 1 > 20 ? 1 : i + 1}.png`,
    id: i + 1 + (seasonNumber - 1) * 20, // Unique ID across seasons
    episodeName: episodeNames[seasonNumber as keyof typeof episodeNames][i],
    rate: 95 - Math.floor(Math.random() * 15), // Random rating between 80-95
    duration: 40 + Math.floor(Math.random() * 20), // Random duration between 40-60 minutes
  }));
};

export const mockSeriesData: Series = {
  id: 1,
  title: 'هانیبال',
  originalTitle: 'Hannibal',
  description:
    'ویل گراهام ، یک متخصص جنایی FBI ، توانایی غیرقابل انکار و همدردی با دکتر هانیبال لکر ، روانپزشک پزشکی قانونی را دارد. با این حال ، او از این که آدمخوار است آگاهی ندارد و ویل گراهام، نمایه‌گر اف‌بی‌آی، توسط جک کرافورد، رئیس علوم رفتاری اف‌بی‌آی، برای کمک به تحقیق در مورد یک قاتل زنجیره‌ای در مینه‌سوتا استخدام می‌شود.',
  bannerImage: '/banner.png',
  logoImage: '/series-logo.png',
  rating: {
    imdb: 8.2,
    userRating: 56,
  },
  duration: 43,
  country: 'آمریکا',
  totalSeasons: 3,
  totalEpisodes: 39,
  language: 'دوبله فارسی',
  ageRating: 'مناسب برای بالای 18 سال',
  genres: ['روانشناسی', 'جنایی', 'درام', 'دلهره‌آور'],
  seasons: [
    {
      id: 1,
      seasonNumber: 1,
      episodes: generateEpisodes(1, 20), // 20 episodes for pagination demo
    },
    {
      id: 2,
      seasonNumber: 2,
      episodes: generateEpisodes(2, 20),
    },
    {
      id: 3,
      seasonNumber: 3,
      episodes: generateEpisodes(3, 20),
    },
  ],
};
