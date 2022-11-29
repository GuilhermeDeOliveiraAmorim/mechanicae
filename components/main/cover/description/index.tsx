import Link from "next/link";
import Label from "../../../utils/label";

interface ITag {
    title: string;
}

interface ICover {
    link: string;
    title: string;
    tags: ITag[];
}

export default function CoverDescription(props: ICover) {
    const { link, title, tags } = props;
    return (
        <div className="w-full mt-12">
            <Link href={link}>
                {title}
            </Link>
            {tags.map(tag =>
                <Label title={tag.title} />
            )}
        </div>
    )
}