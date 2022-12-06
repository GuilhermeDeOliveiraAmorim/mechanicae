import { IAbout } from "../../interfaces/IAbout";
import { GetServerSideProps } from "next";
import axios from "axios";
import Header from "../../components/header";
import Title from "../../components/utils/title";

export default function About(props: IAbout) {
  const { about } = props;
  return (
    <div>
      <Header />
      <div className="pl-44 pr-44 pb-28">
        <Title title="About" textSize="text-3xl" textAlign="text-left" />
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <figure>
              <img src={about.picture} />
              <figcaption className="flex gap-4 mt-4">
                <span className="font-bold">{about.name}</span>
                <span>|</span>
                <span>{about.degree}</span>
              </figcaption>
            </figure>
          </div>
          <div className="col-span-2 ml-20">
            {about.text.map((text) => (
              <p
                key={text.id}
                className="mb-4 whitespace-pre-wrap break-words font-normal text-sm line leading-8 text-[#575757]"
              >
                {text.p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get("http://localhost:8000/about");
  return {
    props: {
      about: data,
    },
  };
};
