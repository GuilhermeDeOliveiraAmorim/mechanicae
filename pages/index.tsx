import { GetServerSideProps } from "next";
import { ICoverDescription } from "../interfaces/ICoverDescription";
import Header from "../components/header";
import Cover from "../components/main/cover";
import Title from "../components/utils/title";
import axios from "axios";
import Footer from "../components/footer";

export default function Home(props: ICoverDescription) {
  const { coverDescription } = props;
  return (
    <div>
      <Header />
      <div className="pl-44 pr-44 pb-28">
        <Title
          title={coverDescription.titleSite}
          textSize="text-3xl"
          textAlign="text-center"
        />
        <Cover
          titleSite={coverDescription.titleSite}
          picture={coverDescription.picture}
          link={coverDescription.link}
          titlePicture={coverDescription.titlePicture}
          tags={coverDescription.tags}
        />
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:8000/cover-description");
  return {
    props: {
      coverDescription: data,
    },
  };
};
