import Title from "../../title";

interface ICard {
  picture: string;
  title: string;
  button: JSX.Element;
}

export default function Card(props: ICard) {
  const { picture, title, button } = props;
  return (
    <div className="w-1/3">
      <img
        src={picture}
        alt={title}
        className="hover:shadow-xl cursor-pointer"
      />
      <div className="pt-4 pb-4">
        <Title title={title} size="2xl" />
      </div>
      <div className="flex justify-center">{button}</div>
    </div>
  );
}
