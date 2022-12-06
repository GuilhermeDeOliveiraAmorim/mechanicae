import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { IFooter } from "../../../interfaces/IFooter";

export default function SocialNetwork(socialNetwork: IFooter) {
  return (
    <div className="flex justify-center align-middle items-center gap-4">
      <Link href="#" className="p-2 bg-[#222222]">
        <FaInstagram className="text-white" />
      </Link>
      <Link href="#" className="p-2 bg-[#222222]">
        <FaLinkedin className="text-white" />
      </Link>
      <Link href="#" className="p-2 bg-[#222222]">
        <FaYoutube className="text-white" />
      </Link>
    </div>
  );
}
