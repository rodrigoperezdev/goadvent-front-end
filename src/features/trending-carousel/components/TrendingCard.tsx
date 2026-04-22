import Image from "next/image";

interface TrendingCardProps {
  imageSrc: string;
  price: number;
  discount: number;
  title: string;
  subtitle: string;
  duration: number;
  rating: number;
  ratingCount: number;
  alt: string;
  wishlist: boolean;
}

export function TrendingCard({
  discount,
  imageSrc,
  title,
  subtitle,
  price,
  duration,
  rating,
  ratingCount,
  alt,
  wishlist,
}: TrendingCardProps) {
  const roundedRating = Math.round(rating);

  const renderStars = () => {
    return Array.from({ length: roundedRating }, (_, index) => (
      <Image
        key={index}
        src="/images/icons/star.svg"
        alt="Star"
        width={16}
        height={16}
        className="h-4 w-4"
      />
    ));
  };

  return (
    <article className="flex max-w-[512px] flex-col max-sm:max-w-[90%]">
      <div
        className="
          flex flex-col items-center rounded-[20px] bg-white px-4 pt-4 pb-8
          shadow-[0px_2px_4px_0px_rgba(14,86,124,0.16)]
        "
      >
        <div
          className="
            relative flex w-full items-start justify-end self-stretch overflow-hidden rounded-[20px]
            px-[22px] pt-4 pb-[240px]
            max-[991px]:px-5 max-[991px]:pb-[100px]
            max-sm:px-5 max-sm:pt-[13px] max-sm:pb-[107px]
          "
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover object-center"
          />

          {discount ? (
            <div className="relative mb-[-42px] rounded-2xl bg-[#f9c7d2] px-[10px] py-[6px] text-center text-[#ee5879] max-[991px]:mb-[10px]">
              {discount}%
            </div>
          ) : null}
        </div>

        <div className="mt-8 flex w-full max-w-[448px] justify-between gap-5">
          <div className="flex flex-col">
            <h4 className="text-[24px] font-semibold tracking-[-0.38px] text-[#1d293f]">
              {title}
            </h4>

            <p className="mt-2 self-start text-[16px] font-normal tracking-[0.5px] text-[#99a3ad]">
              {subtitle}
            </p>
          </div>

          <Image
            src={
              wishlist
                ? "/images/icons/wishlist-active.svg"
                : "/images/icons/wishlist.svg"
            }
            alt="Wishlist button"
            width={48}
            height={48}
            className="h-12 w-12 self-start object-contain"
          />
        </div>

        <div className="mt-7 w-full max-w-[448px]">
          <div className="flex w-full justify-between text-[14px] font-normal text-[#546179] max-[991px]:mt-[23px]">
            <div className="ml-0 flex flex-col items-start leading-normal">
              <span className="text-center">from</span>

              <span className="relative z-[1] text-[32px] font-semibold tracking-[-0.48px] text-[#1d293f] after:absolute after:bottom-[7px] after:left-0 after:-z-[1] after:h-[7px] after:w-full after:bg-[#f5a623] after:content-['']">
                ${price}
              </span>

              <span>*Price varies</span>
            </div>

            <div className="flex flex-col justify-end">
              <div className="flex flex-col items-start">
                <div className="mb-[0.94rem] flex">{renderStars()}</div>

                <span className="self-end max-[991px]:ml-[10px]">
                  {rating} ({ratingCount})
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[448px]">
          <div className="mt-10 flex gap-2 text-[16px] font-medium leading-none text-[#1d293f]">
            <Image
              src="/images/icons/duration.svg"
              alt="Duration"
              width={18}
              height={18}
              className="h-[18px] w-[18px] self-start object-contain"
            />
            <span>{duration} days</span>
          </div>

          <div className="mt-2 flex gap-[11px] text-[16px] tracking-[0.5px] text-[#546179]">
            <Image
              src="/images/icons/checkmark.svg"
              alt="Checkmark"
              width={12}
              height={8}
              className="my-auto h-auto w-3 object-contain"
            />
            <span className="mr-6 w-[147px] whitespace-nowrap">
              Free Cancellation
            </span>
          </div>

          <div className="mt-2 flex gap-[11px] text-[16px] tracking-[0.5px] text-[#546179]">
            <Image
              src="/images/icons/checkmark.svg"
              alt="Checkmark"
              width={12}
              height={8}
              className="my-auto h-auto w-3 object-contain"
            />
            <span>New on Entrada</span>
          </div>
        </div>
      </div>
    </article>
  );
}
