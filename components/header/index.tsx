import Link from "next/link";
import MenuDropDownItem from "./menu-dropdown/item";

const arrShop = {
  title: "Shop",
  link: "shop",
  dropDown: [
    {
      title: "Drawing Templates",
      link: "shop/drawing-templates",
    },
    {
      title: "Procreate Brushes",
      link: "shop/procreate-brushes",
    },
    {
      title: "A+E Course",
      link: "shop/a-e-course",
    },
    {
      title: "BLANK sketchbook",
      link: "blank-sketchbook",
    },
    {
      title: "Trace Sketchbook",
      link: "trace-sketchbook",
    },
    {
      title: "Books",
      link: "books",
    },
    {
      title: "Merch",
      link: "merch",
    },
    {
      title: "Gift Guide",
      link: "gift-guide",
    },
  ],
};

const arrContact = {
  title: "Contact",
  link: "contact",
  dropDown: [
    {
      title: "Questions + FAQ",
    },
    {
      title: "Contact",
    },
  ],
};

const arrLearn = {
  title: "Learn",
  link: "learn",
};

const arrBlog = {
  title: "Blog",
  link: "blog",
};

const arrPortfolio = {
  title: "Portfolio",
  link: "portfolio",
};

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-20 pl-44 pr-44 pt-28">
      <Link href={"/"}>
        <img src="30X40_LOGO_SQUARESPACE.png" alt="30 x 40" className="h-24" />
      </Link>
      <nav>
        <ul className="flex gap-7">
          <MenuDropDownItem title={arrBlog.title} link={arrBlog.link} />

          <MenuDropDownItem title={arrLearn.title} link={arrLearn.link} />

          <MenuDropDownItem
            title={arrPortfolio.title}
            link={arrPortfolio.link}
          />

          <MenuDropDownItem
            title={arrShop.title}
            link={arrShop.link}
            menuItens={arrShop.dropDown}
          />

          <MenuDropDownItem
            title={arrContact.title}
            link={arrContact.link}
            menuItens={arrContact.dropDown}
          />
        </ul>
      </nav>
    </header>
  );
}
