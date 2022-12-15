import Link from "next/link";
import { IPost } from "../../../../interfaces/IPost";

export default function PostMini(props: IPost) {
  const { id, title, created } = props;
  return (
    <div className="grid grid-cols-2 gap-4">
      <img src="design-meet-revise-repeat-thumbnail.jpg" alt="" />
      <div>
        <Link href="#">
          <h1 className="text-[#737373] text-sm hover:text-[#222222]">{title}</h1>
        </Link>
        <p className="text-[#737373] text-[13px]">{created}</p>
      </div>
    </div>
  );
}
