import { useState } from "react";
import MenuDropDownItem from "./menu-dropdown/item";

const arrShop = [
  {
    title: "A",
  },
  {
    title: "B",
  },
];

const arrBlog = [
  {
    title: "C",
  },
  {
    title: "D",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <img src="30X40_LOGO_SQUARESPACE.png" alt="" className="h-24" />
      <nav>
        <ul className="flex gap-7">
          <MenuDropDownItem title={"Blog"} menuItens={arrShop} />
          <MenuDropDownItem title={"Learn"} menuItens={arrBlog} />
        </ul>
      </nav>
    </header>
  );
}
