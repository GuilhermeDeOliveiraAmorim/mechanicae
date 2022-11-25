import Link from "next/link";
import MostPopularItem from "./most-popular-item";

interface IMostPopularItem {
  title: string;
  link: string;
}

interface IMostPopular {
  items: IMostPopularItem[];
}

export default function MostPopular(props: IMostPopular) {
  const { items } = props;
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <MostPopularItem key={item.title} title={item.title} link={item.link} />
      ))}
    </div>
  );
}
