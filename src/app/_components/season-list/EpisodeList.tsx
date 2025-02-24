import { Button } from '@/shared/components/button/Button';
import { GeneralLoading } from '@/shared/components/loading/GeneralLoading';
import { Episode } from '@/shared/types/series';
import { EpisodeCard } from './EpisodeCard';

interface EpisodeListProps {
  loading?: boolean;
  hasMore?: boolean;
  episodes: Episode[];
  onLoadMore?: () => void;
}

export function EpisodeList({ episodes, loading, hasMore, onLoadMore }: EpisodeListProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} className="md:flex-col" {...episode} />
        ))}
      </div>

      {loading && <GeneralLoading />}

      {!loading && hasMore && (
        <Button variant="outlined" onClick={onLoadMore}>
          مشاهده بیشتر
        </Button>
      )}
    </div>
  );
}
