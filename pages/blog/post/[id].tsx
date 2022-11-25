import { useRouter } from "next/router";
import { posts } from "../../../data";
import Label from "../../../components/utils/label";

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
      <h1>{post?.title}</h1>
      <span>{today.toUTCString()}</span>
      <p>{post?.body}</p>
      <span>
        categories:{" "}
        {categories.map((tag) => (
          <Label title={tag.title} />
        ))}
      </span>
      <span>
        tags:
        {tags.map((tag) => (
          <Label title={tag.title} />
        ))}
      </span>
    </div>
  );
}
