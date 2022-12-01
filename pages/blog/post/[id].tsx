import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IPost } from "../../../interfaces/IPost";
import Label from "../../../components/utils/label";
import Link from "next/link";
import axios from "axios";

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const tags = [
  { title: "reprehenderit" },
  { title: "molestiae" },
  { title: "nostrum" },
  { title: "architecto" },
];

const categories = [
  { title: "suscipit" },
  { title: "quas" },
  { title: "recusandae" },
  { title: "expedita" },
];

export default function Post(props: IPost) {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:8000/posts/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [post]);

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  return (
    <div key={post?.id}>
      <Link href={"#"}>
        <h1 className="text-[#222222] font-medium text-2xl uppercase pb-4">
          {post?.title}
        </h1>
      </Link>
      <p className="text-sm text-[#b3b3b3] pb-4">{today.toUTCString()}</p>
      <p className="whitespace-pre-wrap break-words font-normal text-sm">
        {post?.body}
      </p>
      <span>
        {categories.map((category) => (
          <Label key={category.title} title={category.title} />
        ))}
      </span>
      <span>
        tags:
        {tags.map((tag) => (
          <Label key={tag.title} title={tag.title} />
        ))}
      </span>
    </div>
  );
}
