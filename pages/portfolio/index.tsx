import Header from "../../components/header";
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

export default function Portfolio() {
  return (
    <div>
      <Header />
      <div className="pl-44 pr-44 pb-28">
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
