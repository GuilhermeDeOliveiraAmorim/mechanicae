import Card from "./card";

interface ICard {
  picture: string;
  title: string;
  button: JSX.Element;
  link: string;
}

interface ICards {
  cards: ICard[];
}

export default function Cards(props: ICards) {
  const { cards } = props;
  return (
    <div className="flex gap-4 pt-4">
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          picture={card.picture}
          button={card.button}
          link={card.link}
        />
      ))}
    </div>
  );
}
