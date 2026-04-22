import { RatingBadge } from "@/shared/components/RatingBadge";

interface DestinationCardProps {
  img_url: string;
  rating: number;
  title: string;
  location: string;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function DestinationCard({
  img_url,
  rating,
  title,
  location,
  className = "",
  contentClassName = "",
  titleClassName = "",
  subtitleClassName = "",
}: DestinationCardProps) {
  return (
    <div
      className={`rounded-[2rem] bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.30) 0%,
          rgba(0, 0, 0, 0.22) 100%
        ), url(${img_url})`,
      }}
    >
      <div
        className={`box-border flex h-full flex-col justify-between p-4 2xl:p-8 ${contentClassName}`}
      >
        <RatingBadge>{rating}</RatingBadge>

        <div>
          <h4
            className={`text-[1.5rem] font-medium text-white ${titleClassName}`}
          >
            {title}
          </h4>
          <p className={`font-light text-white ${subtitleClassName}`}>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}
