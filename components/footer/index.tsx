import { IFooter } from "../../interfaces/IFooter";
import { GetServerSideProps } from "next";
import axios from "axios";
import Link from "next/link";
import SocialNetwork from "./social-network";

export default function Footer(props: IFooter) {
  const { socialNetwork } = props;
  return (
    <div className="mt-12 mb-12">
      <SocialNetwork socialNetwork={socialNetwork} />
      <div className="flex justify-center align-middle items-center gap-4 mt-12">
        <span className="whitespace-pre-wrap break-words font-normal text-sm">
          © 30X40 Design Workshop LLC
        </span>
        <span>|</span>
        <Link
          href="#"
          className="whitespace-pre-wrap break-words font-normal text-sm"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get<IFooter>("http://localhost:8000/footer");
  console.log(data);

  return {
    props: {
      socialNetwork: data.socialNetwork,
    },
  };
};
