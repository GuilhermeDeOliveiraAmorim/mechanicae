import { ICards } from "../../../interfaces/ICards";
import Card from "./card";

export default function Cards(props: ICards) {
  const { cards } = props;
  return (
    <div className="flex gap-4 pt-4">
      {cards.map((card) => (
        <Card
          id={card.id}
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
