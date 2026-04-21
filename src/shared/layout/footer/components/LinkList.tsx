interface LinkListProps {
  title: string;
  items: string[];
}

export function LinkList({ title, items }: LinkListProps) {
  return (
    <div>
      <h4 className="mb-4 text-[1.5rem] font-medium text-[#1d293f]">{title}</h4>

      <ul className="p-0">
        {items.map((item, index) => (
          <li key={index} className="mb-4 text-base font-normal text-[#546179]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
