import Header from "../../components/header";
import Button from "../../components/utils/button";
import Subtitle from "../../components/utils/subtitle";
import Title from "../../components/utils/title";
import Cards from "../../components/utils/cards";
import Footer from "../../components/footer";
import { ICard } from "../../interfaces/ICard";
import { GetServerSideProps } from "next";
import axios from "axios";
import { ILearn } from "../../interfaces/ILearn";

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

export default function Learn(props: ILearn) {
  const { title, subtitle, cards } = props;
  console.log(title, subtitle, cards);

  return (
    <div>
      <Header />
      <div className="pl-44 pr-44 pb-28">
        <Title title={title} textSize="text-3xl" textAlign="text-center" />
        <Subtitle subtitle={subtitle} />
        <Cards cards={arrCards} />
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get<ILearn>("http://localhost:8000/learn");
  console.log(data);

  return {
    props: {
      ILearn: data,
    },
  };
};
