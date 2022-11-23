interface IItem {
  title: string;
}

interface IMenuDropDown {
  show: boolean;
  itens?: IItem[];
}

export default function MenuDropDown(props: IMenuDropDown) {
  const { show, itens } = props;
  return (
    <ul className={show ? "block absolute pt-2" : "hidden"}>
      {itens?.map((item) => (
        <li
          key={item.title}
          className="uppercase text-sm text-link-menu cursor-pointer hover:text-link-hover"
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
