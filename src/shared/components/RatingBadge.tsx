interface RatingBadgeProps {
  children: React.ReactNode;
}

export function RatingBadge({ children }: RatingBadgeProps) {
  return (
    <div className="flex justify-end text-center text-[1.125rem] font-medium leading-[111.111%] text-[#f5a623]">
      <span className="rounded-[1rem] bg-[#fef2de] px-[0.9rem] py-[0.38rem]">
        {children}
      </span>
    </div>
  );
}
