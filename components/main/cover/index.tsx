import Link from "next/link";
import CoverDescription from "./description";

interface ITag {
    title: string;
}

interface ICover {
    picture: string;
    link: string;
    title: string;
    tags: ITag[];
}

export default function Cover(props: ICover) {
    const { picture, link, title, tags } = props;
    return (
        <div>
            <div className="w-full mt-12">
                <Link href={link}>
                    <div
                        className="bg-auto bg-no-repeat bg-center h-[510px] cursor-pointer hover:shadow-xl"
                        style={{ backgroundImage: `url(${picture})` }}
                    ></div>
                </Link>
                <CoverDescription title={title} link={link} tags={tags} />
            </div>
        </div>

    )
}