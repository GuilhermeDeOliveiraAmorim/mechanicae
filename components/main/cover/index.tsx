import { ICover } from "../../../interfaces/ICover";
import Link from "next/link";
import CoverDescription from "./description";

export default function Cover(props: ICover) {
  const { picture, link, titlePicture, tags } = props;
  return (
    <div>
      <div className="w-full mt-12">
        <Link href={link}>
          <div
            className="bg-no-repeat bg-center bg-cover h-[450px] cursor-pointer hover:shadow-xl"
            style={{ backgroundImage: `url(${picture})` }}
          ></div>
        </Link>
        <CoverDescription title={titlePicture} link={link} tags={tags} />
      </div>
    </div>
  );
}
