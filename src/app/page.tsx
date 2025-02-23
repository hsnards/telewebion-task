"use client"
import { Button } from '@/shared/components/button/Button';
import { Container } from '@/shared/components/container/Container';
import {
  BookmarkIcon,
  DislikeIcon,
  DownloadIcon,
  ImdbIcon,
  LikeIcon,
  PlayIcon,
  ThumbUpIcon,
} from '@/shared/components/icons';
import { Tag } from '@/shared/components/tag/tag';
import Image from 'next/image';
import { MetadataList } from './_components/MetadataList';
import { SeasonList } from './_components/SeasonList';
import { useSeriesDetails } from '@/shared/hooks/useSeriesQueries';

export default function Home() {
  const { data: seriesDetails, isLoading, error } = useSeriesDetails();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        Error loading series details: {error.message}
      </div>
    );
  }

  if (!seriesDetails) {
    return null;
  }

  return (
    <main className="animate-blink transition-opacity duration-200 ease-in-out pt-5 md:pt-0">
      <div className="flex flex-col gap-4">
        <section className="grid w-full">
          <div className="h-[216px] sm:h-[350px] lg:h-[586px] col-start-1 row-start-1 relative">
            <Image
              src={seriesDetails.bannerImage}
              alt="Hero background"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="col-start-1 row-start-1 relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(270deg,rgb(0,0,0)_0%,rgba(0,0,0,0.75)_10%,rgba(0,0,0,0.5)_30%,rgba(0,0,0,0)_60%),linear-gradient(rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_75%,rgb(0,0,0)_100%),linear-gradient(rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_7rem)]" />

          <div className="col-start-1 row-start-2 md:col-start-1 md:row-start-1 z-10 flex flex-col justify-center text-white">
            <Container className="text-center md:text-right">
              <Image
                alt="logo"
                src={seriesDetails.logoImage}
                width={400}
                height={155}
                className="mb-5 hidden md:block"
                priority
              />
              <h1 className="text-title font-bold mb-1">
                {seriesDetails.title} | {seriesDetails.originalTitle}
              </h1>
              <div className="text-caption mb-1">
                <MetadataList>
                  <span>
                    <ThumbUpIcon className="ml" />
                    {seriesDetails.rating.userRating}%
                  </span>
                  <span>
                    <ImdbIcon className="ml-0.5" />
                    {seriesDetails.rating.imdb}
                  </span>
                  <span>{seriesDetails.duration} دقیقه</span>
                  <span>{seriesDetails.country}</span>
                  <span>
                    {seriesDetails.totalSeasons} فصل({seriesDetails.totalEpisodes} قسمت)
                  </span>
                  <span>
                    {seriesDetails.language} {seriesDetails.ageRating}
                  </span>
                </MetadataList>
              </div>
              <div className="flex mb-4 justify-center md:justify-start gap-0.5">
                {seriesDetails.genres.map((genre) => (
                  <Tag key={genre} label={genre} />
                ))}
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center mb-2">
                <Button className="md:w-fit w-full hover:bg-primary/70" startIcon={<PlayIcon />}>
                  پخش
                </Button>
                <div className="flex gap-1 items-center">
                  <Button variant="outlined" withIcon>
                    <DownloadIcon />
                  </Button>
                  <Button variant="outlined" withIcon>
                    <BookmarkIcon />
                  </Button>
                </div>
                <div className="flex gap-1 items-center">
                  <Button variant="outlined" withIcon>
                    <LikeIcon />
                  </Button>
                  <Button variant="outlined" withIcon>
                    <DislikeIcon />
                  </Button>
                </div>
              </div>
              <p className="text-body max-w-2xl line-clamp-2">{seriesDetails.description}</p>
            </Container>
          </div>
        </section>
      </div>
      <Container>
        <div className="py-4 md:py-10 flex flex-col items-center gap-4">
          <SeasonList />
        </div>
      </Container>
    </main>
  );
}
