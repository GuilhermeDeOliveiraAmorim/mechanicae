import Link from "next/link";

interface IMostPopularItem {
  title: string;
  link: string;
}

export default function MostPopularItem(props: IMostPopularItem) {
  const { title, link } = props;
  return (
    <Link
      className="break-words whitespace-pre-wrap font-normal text-sm mb-4 border border-solid border-b-1 hover:border-gray-400 border-t-0 border-l-0 border-r-0 w-fit"
      href={`/blog/post/${link}`}
    >
      {title}
    </Link>
  );
}
