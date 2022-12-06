import { IMostPopular } from "../../interfaces/IMostPopular";
import { GetServerSideProps } from "next";
import axios from "axios";
import MostPopular from "../../components/blog/most-popular";
import Header from "../../components/header";
import Hr from "../../components/utils/hr";
import Title from "../../components/utils/title";

export default function Blog(props: IMostPopular) {
  const { mostPopular } = props;
  return (
    <div>
      <Header />
      <div className="pl-44 pr-44 pb-28">
        <div>
          <h1 className="uppercase text-[#222222] text-base font-bold mb-4">
            New Here?
          </h1>
          <p className="break-words whitespace-pre-wrap font-normal text-sm mb-4 text-gray-500">
            Start with one of our most popular posts…
          </p>
          <MostPopular items={mostPopular} />
          <Hr />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get("http://localhost:8000/most-popular");
  return {
    props: {
      mostPopular: data,
    },
  };
};
