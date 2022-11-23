import Link from "next/link";
import Title from "../../title";

interface ICard {
  picture: string;
  title: string;
  button: JSX.Element;
  link: string;
}

export default function Card(props: ICard) {
  const { picture, title, button, link } = props;
  return (
    <div className="w-1/3">
      <Link href={link}>
        <div
          className="bg-auto bg-no-repeat bg-center h-80 cursor-pointer hover:shadow-xl"
          style={{ backgroundImage: `url(${picture})` }}
        ></div>
      </Link>
      <div className="pt-4 pb-4">
        <Title title={title} size="2xl" />
      </div>
      <div className="flex justify-center">{button}</div>
    </div>
  );
}
