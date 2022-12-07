import { useEffect, useState } from "react";
import { IFooter } from "../../interfaces/IFooter";
import Link from "next/link";
import axios from "axios";
import SocialNetwork from "./social-network";

export default function Footer() {
  const [footerInfo, setFooterInfo] = useState<IFooter>();

  useEffect(() => {
    axios.get("http://localhost:8000/footer").then(function (response) {
      setFooterInfo(response.data);
    });
  }, []);

  return (
    <div className="mt-12 mb-12">
      <SocialNetwork />
      <div className="flex justify-center align-middle items-center gap-4 mt-12">
        <span className="whitespace-pre-wrap break-words font-normal text-sm line leading-8 text-[#575757]">
          {footerInfo?.title}
        </span>
        <span className="whitespace-pre-wrap break-words font-normal text-sm line leading-8 text-[#575757]">
          |
        </span>
        <Link
          href={footerInfo?.policy.link ? footerInfo?.policy.link : "#"}
          className="whitespace-pre-wrap break-words font-normal text-sm border border-solid border-b-1 hover:border-gray-400 border-t-0 border-l-0 border-r-0 leading-8 text-[#575757]"
        >
          {footerInfo?.policy.title}
        </Link>
      </div>
    </div>
  );
}
