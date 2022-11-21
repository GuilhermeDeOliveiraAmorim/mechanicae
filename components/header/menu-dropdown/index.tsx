interface IItem {
  title: string;
}

interface IMenuDropDown {
  show: boolean;
  itens: IItem[];
}

export default function MenuDropDown(props: IMenuDropDown) {
  const { show, itens } = props;
  return (
    <ul className={show ? "block" : "hidden"}>
      {itens.map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
}
