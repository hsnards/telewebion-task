import { Episode } from '@/shared/types/series';
import { EpisodeCard } from './EpisodeCard';
import { Button } from '@/shared/components/button/Button';

interface EpisodeListProps {
  episodes: Episode[];
  loading?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
}

export function EpisodeList({ episodes, loading, hasMore, onLoadMore }: EpisodeListProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
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
      
      {loading && (
        <div className="flex justify-center w-full py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
      
      {!loading && hasMore && (
        <Button variant="outlined" onClick={onLoadMore}>
          مشاهده بیشتر
        </Button>
      )}
    </div>
  );
}
