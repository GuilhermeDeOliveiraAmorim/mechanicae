import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { ISocialNetworking } from "../../../interfaces/ISocialNetworking";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { IPost } from "../../../interfaces/IPost";

export default function BlogList() {
  const [posts, setPosts] = useState<IPost[]>();

  useEffect(() => {
    axios.get("http://localhost:8000/posts").then(function (response) {
      setPosts(response.data);
    });
  }, []);

  console.log(posts);

  return (
    <div>
      <h1 className="text-[#222222] font-medium text-2xl mb-2">
        BUILDING A 30-MINUTE STUDY MODEL
      </h1>
      <p className="text-[#b3b3b3] text-xs font-normal mb-4">
        September 6, 2022
      </p>
      <p className="whitespace-pre-wrap break-words font-normal text-sm line leading-8 mb-4 text-[#575757]">
        Architects build study models to quickly understand building forms and
        site relationships. Just like a sketch, a study model is loose, a little
        messy, and left open to multiple readings. Here's how I build study
        models for my client presentations in about 30 minutes.
      </p>
      <Link
        href="#"
        className="whitespace-pre-wrap break-words font-normal text-base border border-solid border-b-1 hover:border-gray-400 border-t-0 border-l-0 border-r-0 leading-8 text-[#575757]"
      >
        Read More
      </Link>
      <div className="flex gap-8 mt-8 text-[#b3b3b3]">
        <div className="flex gap-1">
          <span>In</span>
          <ul className="flex gap-2">
            <li>
              <Link href="#" className="hover:text-[#333333]">
                Design
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#333333]">
                Videos
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#333333]">
                Work
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-1">
          <span>Tags</span>
          <ul className="flex gap-2">
            <li>
              <Link href="#" className="hover:text-[#333333]">
                model
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#333333]">
                making
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
