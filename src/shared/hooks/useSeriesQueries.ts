'use client';

import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { seriesApi } from '../services/series';

export const seriesKeys = {
  all: ['series'] as const,
  details: () => [...seriesKeys.all, 'details'] as const,
  episodes: (seasonNumber: number) => [...seriesKeys.all, 'episodes', seasonNumber] as const,
};

export function useSeriesDetails() {
  return useQuery({
    queryKey: seriesKeys.details(),
    queryFn: () => seriesApi.getSeriesDetails(),
  });
}

export function useSeasonEpisodes(seasonNumber: number) {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: seriesKeys.episodes(seasonNumber),
    queryFn: ({ pageParam = 1 }) => seriesApi.getSeasonEpisodes(seasonNumber, pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.metadata.hasMore ? lastPage.metadata.currentPage + 1 : undefined,
  });
}
