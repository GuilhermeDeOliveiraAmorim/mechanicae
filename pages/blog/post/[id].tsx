import { useRouter } from "next/router";
import { posts } from "../../../data";
import Label from "../../../components/utils/label";
import Link from "next/link";

interface IPost {
  userId: number;
  id: number;
  title: string;
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

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  var idPost = 0;

  if (typeof id === "string") {
    idPost = parseInt(id);
  }

  const postFiltered = posts.filter((post) => post.id === idPost);
  const post = postFiltered[0];
  console.log(post);

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
        categories:{" "}
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
