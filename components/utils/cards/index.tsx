import Button from "../button";
import Card from "./card";

interface ICard {
  picture: string;
  title: string;
  button: JSX.Element;
}

interface ICards {
  cards: ICard[];
}

export default function Cards(props: ICards) {
  const { cards } = props;
  return (
    <div className="flex gap-4 pt-4">
      {cards.map((card) => (
        <Card title={card.title} picture={card.picture} button={card.button} />
      ))}
    </div>
  );
}
