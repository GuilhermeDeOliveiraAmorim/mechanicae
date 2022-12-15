import Link from "next/link";
import { ICard } from "../../../../interfaces/ICard";
import Button from "../../button";
import Title from "../../title";

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
        <Title title={title} textSize="2xl" textAlign="" />
      </div>
      <div className="flex justify-center">
        <Button link={button.link} title={button.title} />
      </div>
    </div>
  );
}
