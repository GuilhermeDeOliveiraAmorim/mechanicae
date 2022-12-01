import { IDescription } from "../../../../interfaces/IDescription";
import Link from "next/link";
import Label from "../../../utils/label";

export default function CoverDescription(props: IDescription) {
  const { link, title, tags } = props;
  return (
    <div className="w-full mt-12">
      <Link href={link} className="p-2">
        {title}
      </Link>
      {tags.map((tag) => (
        <Label key={tag.id} title={tag.title} />
      ))}
    </div>
  );
}
