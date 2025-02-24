'use client';

import { Container } from '@/shared/components/container/Container';
import { GeneralError } from '@/shared/components/error/GeneralError';
import { TabContent, TabList, Tabs, TabTrigger } from '@/shared/components/tabs';
import { useSeasonEpisodes } from '@/shared/hooks/useSeriesQueries';
import { SeriesDetails } from '@/shared/types/series';
import { useMemo } from 'react';
import { EpisodeList } from './EpisodeList';

export function SeasonList({ totalSeasons }: Pick<SeriesDetails, 'totalSeasons'>) {
  const season1Query = useSeasonEpisodes(1);
  const season2Query = useSeasonEpisodes(2);
  const season3Query = useSeasonEpisodes(3);

  const seasonQueries = {
    1: season1Query,
    2: season2Query,
    3: season3Query,
  };

  const tabs = useMemo(() => Array.from({ length: totalSeasons }), [totalSeasons]);

  const handleTabChange = (value: string) => {
    const seasonNumber = parseInt(value, 10);
    const query = seasonQueries[seasonNumber as keyof typeof seasonQueries];
    if (!query.data) {
      query.refetch();
    }
  };

  if (season1Query.error) {
    return <GeneralError message={season1Query.error.message} />;
  }

  return (
    <Container className="py-4 md:py-10 flex flex-col items-center gap-4">
      <Tabs defaultValue="1" onValueChange={handleTabChange}>
        <TabList>
          {tabs.map((_, index) => (
            <TabTrigger key={index} value={String(index + 1)}>
              فصل {index + 1}
            </TabTrigger>
          ))}
        </TabList>

        {tabs.map((_, index) => {
          const seasonNumber = index + 1;
          const query = seasonQueries[seasonNumber as keyof typeof seasonQueries];
          const episodes = query.data?.pages.flatMap((page) => page.data) ?? [];
          const isLoading = query.isLoading || query.isFetchingNextPage;
          const hasMore = query.hasNextPage;

          return (
            <TabContent key={index} value={String(seasonNumber)}>
              <EpisodeList
                hasMore={hasMore}
                episodes={episodes}
                loading={isLoading}
                onLoadMore={() => query.fetchNextPage()}
              />
            </TabContent>
          );
        })}
      </Tabs>
    </Container>
  );
}
