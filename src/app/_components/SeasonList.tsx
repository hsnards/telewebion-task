"use client"

import { TabContent, TabList, Tabs, TabTrigger } from '@/shared/components/tabs';
import { useSeasonEpisodes } from '@/shared/hooks/useSeriesQueries';
import { EpisodeList } from './EpisodeList';

export function SeasonList() {
  const season1Query = useSeasonEpisodes(1);
  const season2Query = useSeasonEpisodes(2);
  const season3Query = useSeasonEpisodes(3);

  const seasonQueries = {
    1: season1Query,
    2: season2Query,
    3: season3Query,
  };

  const handleTabChange = (value: string) => {
    const seasonNumber = parseInt(value, 10);
    const query = seasonQueries[seasonNumber as keyof typeof seasonQueries];
    if (!query.data) {
      query.refetch();
    }
  };

  if (season1Query.error) {
    return <div className="text-red-500">Error loading episodes: {season1Query.error.message}</div>;
  }

  return (
    <Tabs defaultValue="1" onValueChange={handleTabChange}>
      <TabList>
        <TabTrigger value="1">فصل اول</TabTrigger>
        <TabTrigger value="2">فصل دوم</TabTrigger>
        <TabTrigger value="3">فصل سوم</TabTrigger>
      </TabList>
      {[1, 2, 3].map((seasonNumber) => {
        const query = seasonQueries[seasonNumber as keyof typeof seasonQueries];
        const episodes = query.data?.pages.flatMap((page) => page.data) ?? [];
        const isLoading = query.isLoading || query.isFetchingNextPage;
        const hasMore = query.hasNextPage;

        return (
          <TabContent key={seasonNumber} value={seasonNumber.toString()}>
            <EpisodeList
              episodes={episodes}
              loading={isLoading}
              hasMore={hasMore}
              onLoadMore={() => query.fetchNextPage()}
            />
          </TabContent>
        );
      })}
    </Tabs>
  );
}
