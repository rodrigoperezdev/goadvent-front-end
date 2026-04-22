import Image from "next/image";

interface CategoryCardProps {
  rating: string;
  imgUrl: string;
  alt: string;
  title: string;
  activitiesNumber: string;
}

export function CategoryCard({
  rating,
  imgUrl,
  alt,
  title,
  activitiesNumber,
}: CategoryCardProps) {
  return (
    <div
      className="
        mb-[5px]
        flex h-full w-[23.5rem] flex-col
        rounded-[0.5rem] border border-[#dce5eb] bg-white
        shadow-[0px_2px_4px_0px_rgba(14,86,124,0.16)]
      "
    >
      <div className="flex h-full flex-col justify-between p-8">
        <div className="flex justify-end text-[1.125rem] font-medium text-[#f5a623]">
          <span className="rounded-full bg-[#fef2de] px-[0.9rem] py-[0.38rem]">
            {rating}
          </span>
        </div>

        <div className="mt-[3.06rem] text-left">
          <div className="mb-4 h-[3.125rem] w-[3.125rem]">
            <Image
              src={imgUrl}
              alt={alt}
              width={50}
              height={50}
              className="h-full w-full object-contain"
            />
          </div>

          <h4 className="my-4 text-[1.5rem] font-medium text-[#1d293f]">
            {title}
          </h4>

          <p className="text-base font-normal text-[#546179]">
            {activitiesNumber} Activities
          </p>
        </div>
      </div>
    </div>
  );
}
