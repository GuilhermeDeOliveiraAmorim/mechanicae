import Link from "next/link";

interface IButton {
  title: string;
  link: string;
}

export default function Button(props: IButton) {
  const { title, link } = props;
  return (
    <Link href={link}>
      <button className="uppercase border-solid border-2 text-[12px] border-[#262626] pt-3 pb-3 pl-6 pr-6 text-[#262626] hover:bg-[#262626] hover:text-white">
        {title}
      </button>
    </Link>
  );
}
