import Header from "../../components/header";
import Button from "../../components/utils/button";
import Subtitle from "../../components/utils/subtitle";
import Title from "../../components/utils/title";
import Cards from "../../components/utils/cards";
import Footer from "../../components/footer";
import { ICard } from "../../interfaces/ICard";

const arrCards: ICard[] = [
  {
    id: 1,
    picture: "design-meet-revise-repeat-thumbnail.jpg",
    title: "COURSES",
    button: {
      link: "courses",
      title: "Learn More",
    },
    link: "courses",
  },
  {
    id: 2,
    picture: "remote-working-igtv2.jpg",
    title: "RESOURCES",
    button: {
      link: "courses",
      title: "Learn More",
    },
    link: "resources",
  },
  {
    id: 3,
    picture: "overhead-cam-thumb.jpg",
    title: "VIDEOS",
    button: {
      link: "courses",
      title: "Learn More",
    },
    link: "videos",
  },
];

export default function Learn() {
  return (
    <div>
      <Header />
      <div className="pl-44 pr-44 pb-28">
        <Title title="Learn" textSize="text-3xl" textAlign="text-center" />
        <Subtitle subtitle="Choose a topic below to see our curated resources: videos, downloadable worksheets, guides and courses." />
        <Cards cards={arrCards} />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const learnContent = [{}];
  return { props: { learnContent } };
}
