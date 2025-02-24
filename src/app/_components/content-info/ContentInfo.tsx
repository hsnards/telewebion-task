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
import { SeriesDetails } from '@/shared/types/series';
import Image from 'next/image';
import { GradientOverlay } from './GradientOverlay';
import { MetadataList } from './MetadataList';

interface ContentInfoProps {
  seriesDetails: SeriesDetails;
}

export function ContentInfo({ seriesDetails }: ContentInfoProps) {
  return (
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
      <GradientOverlay />
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
  );
}
