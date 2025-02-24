import { mockSeriesData } from '../mocks/series';
import { Episode, PaginatedResponse, Series } from '../types/series';

const ITEMS_PER_PAGE = 16;

export const seriesApi = {
  getSeriesDetails(): Promise<Series> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockSeriesData);
      }, 500); // Simulate network delay
    });
  },

  getSeasonEpisodes(seasonNumber: number, page: number = 1): Promise<PaginatedResponse<Episode>> {
    return new Promise((resolve) => {
      const season = mockSeriesData.seasons.find((s) => s.seasonNumber === seasonNumber);
      if (!season) {
        throw new Error(`Season ${seasonNumber} not found`);
      }

      const totalItems = season.episodes.length;
      const startIndex = (page - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

      const paginatedData: PaginatedResponse<Episode> = {
        data: season.episodes.slice(startIndex, endIndex),
        metadata: {
          totalPages,
          totalItems,
          currentPage: page,
          hasMore: page < totalPages,
          itemsPerPage: ITEMS_PER_PAGE,
        },
      };

      setTimeout(() => {
        resolve(paginatedData);
      }, 500); // Simulate network delay
    });
  },
};
