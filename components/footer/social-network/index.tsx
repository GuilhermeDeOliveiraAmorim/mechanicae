import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { ISocialNetworking } from "../../../interfaces/ISocialNetworking";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function SocialNetworking() {
  const [socialNetworking, setSocialNetworking] = useState<ISocialNetworking>();

  useEffect(() => {
    axios
      .get("http://localhost:8000/social-networking")
      .then(function (response) {
        setSocialNetworking(response.data);
      });
  }, []);

  console.log(socialNetworking);

  return (
    <div className="flex justify-center align-middle items-center gap-4">
      <Link href="#" className="p-2 bg-[#222222] hover:bg-gray-600">
        <FaInstagram className="text-white" />
      </Link>
      <Link href="#" className="p-2 bg-[#222222] hover:bg-gray-600">
        <FaLinkedin className="text-white" />
      </Link>
      <Link href="#" className="p-2 bg-[#222222] hover:bg-gray-600">
        <FaYoutube className="text-white" />
      </Link>
    </div>
  );
}
