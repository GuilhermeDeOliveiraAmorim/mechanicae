import MostPopularItem from "./most-popular-item";

interface IMostPopularItem {
  id: number;
  userId: number;
  title: string;
  body: string;
  link: string;
}

interface IMostPopular {
  items: IMostPopularItem[];
}

export default function MostPopular(props: IMostPopular) {
  const { items } = props;
  return (
    <div className="flex flex-col">
      {items?.map((item) => (
        <MostPopularItem key={item.title} title={item.title} link={item.link} />
      ))}
    </div>
  );
}
