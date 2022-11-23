import Link from "next/link";
import { useState } from "react";
import MenuDropDown from "..";

interface IItem {
  title: string;
}

interface IMenuDropDownItem {
  title: string;
  link: string;
  menuItens?: IItem[] | undefined;
}

export default function MenuDropDownItem(props: IMenuDropDownItem) {
  const { title, link, menuItens } = props;
  const [showMenuDropDown, setShowMenuDropDown] = useState(false);
  function menuDropDown(show: boolean) {
    setShowMenuDropDown(show);
  }
  return (
    <Link href={link}>
      <li
        className="uppercase text-link-menu cursor-pointer hover:text-link-hover"
        onMouseOver={() => menuDropDown(true)}
        onMouseLeave={() => menuDropDown(false)}
      >
        {title}
        <MenuDropDown show={showMenuDropDown} itens={menuItens} />
      </li>
    </Link>
  );
}
