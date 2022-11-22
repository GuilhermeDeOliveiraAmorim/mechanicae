import MenuDropDownItem from "./menu-dropdown/item";

const arrShop = [
  {
    title: "Drawing Templates",
  },
  {
    title: "Procreate Brushes",
  },
  {
    title: "A+E Course",
  },
  {
    title: "BLANK sketchbook",
  },
  {
    title: "Trace Sketchbook",
  },
  {
    title: "Books",
  },
  {
    title: "Merch",
  },
  {
    title: "Gift Guide",
  },
];

const arrContact = [
  {
    title: "Questions + FAQ",
  },
  {
    title: "Contact",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <img src="30X40_LOGO_SQUARESPACE.png" alt="" className="h-24" />
      <nav>
        <ul className="flex gap-7">
          <MenuDropDownItem title={"Blog"} menuItens={arrShop} />
          <MenuDropDownItem title={"Contact"} menuItens={arrContact} />
        </ul>
      </nav>
    </header>
  );
}
