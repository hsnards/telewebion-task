export interface Episode {
  id: number;
  title: string;
  episodeName: string;
  imageUrl: string;
  duration: number;
  rate: number;
  season: number;
  episode: number;
}

export interface Season {
  id: number;
  seasonNumber: number;
  episodes: Episode[];
}

export interface Series {
  id: number;
  title: string;
  originalTitle: string;
  description: string;
  bannerImage: string;
  logoImage: string;
  rating: {
    imdb: number;
    userRating: number;
  };
  duration: number;
  country: string;
  totalSeasons: number;
  totalEpisodes: number;
  language: string;
  ageRating: string;
  genres: string[];
  seasons: Season[];
}

export interface PaginatedResponse<T> {
  data: T[];
  metadata: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasMore: boolean;
  };
} 