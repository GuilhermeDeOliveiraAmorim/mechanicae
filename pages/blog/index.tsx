import MostPopular from "../../components/blog/most-popular";
import Header from "../../components/header";
import Title from "../../components/utils/title";

const mostPopular = [
  { title: "Updating my Workspace", link: "updating-my-Workspace" },
  { title: "Architect’s DIY Kitchen Remodel", link: "longhouse-kitchen" },
  {
    title: "Sketching In Isolation - Work From Home Skill Building",
    link: "sketching-in-isolation",
  },
];

export default function Blog() {
  return (
    <div>
      <Header />
      <div className="pl-44 pr-44 pb-28">
        <Title title="" size="3xl" />
        <div>
          <h1 className="uppercase text-[#222222] text-base font-bold mb-4">
            New Here?
          </h1>
          <p className="break-words whitespace-pre-wrap font-normal text-sm mb-4 text-gray-500">
            Start with one of our most popular posts…
          </p>
          <MostPopular items={mostPopular} />
        </div>
      </div>
    </div>
  );
}
