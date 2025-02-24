'use client';

import { GeneralError } from '@/shared/components/error/GeneralError';
import { GeneralLoading } from '@/shared/components/loading/GeneralLoading';
import { useSeriesDetails } from '@/shared/hooks/useSeriesQueries';
import { ContentInfo } from './_components/content-info/ContentInfo';
import { SeasonList } from './_components/season-list/SeasonList';

export default function Home() {
  const { data: seriesDetails, isLoading, error } = useSeriesDetails();

  if (isLoading) {
    return (
      <main className="pt-10 h-screen">
        <GeneralLoading />
      </main>
    );
  }

  if (error) {
    return <GeneralError message={error.message} />;
  }

  if (!seriesDetails) {
    return null;
  }

  return (
    <main className="animate-blink transition-opacity duration-200 ease-in-out pt-5 md:pt-0">
      <ContentInfo seriesDetails={seriesDetails} />
      <SeasonList totalSeasons={seriesDetails.totalSeasons} />
    </main>
  );
}
