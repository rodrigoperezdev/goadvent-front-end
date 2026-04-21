export function Sidebar() {
  return (
    <div
      className="
        fixed right-[-7.3rem] top-[30rem]
        rotate-[-90deg]
        max-[1500px]:right-[-8rem] max-[1500px]:top-[28rem]
        max-[1200px]:hidden
      "
    >
      <span className="text-[1.4rem] font-normal leading-none max-[1500px]:text-[1.3rem]">
        Linkedin / Facebook / Instagram
      </span>
    </div>
  );
}
