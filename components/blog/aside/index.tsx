import Link from "next/link";
import Title from "../../utils/title";

export default function AsideBlog() {
    return (
        <aside>
            <Title title="LATEST POSTS" textSize="text-xl" textAlign="" />
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <img src="design-meet-revise-repeat-thumbnail.jpg" alt="" />
                    <div>
                        <Link href="#">
                            <h1 className="text-[#737373] text-sm hover:text-[#222222]">BUILDING A 30-MINUTE STUDY MODEL</h1>
                        </Link>
                        <p className="text-[#737373] text-[13px]">Sep 6, 2022</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src="design-meet-revise-repeat-thumbnail.jpg" alt="" />
                    <div>
                        <Link href="#">
                            <h1 className="text-[#737373] text-sm hover:text-[#222222]">BUILDING A 30-MINUTE STUDY MODEL</h1>
                        </Link>
                        <p className="text-[#737373] text-[13px]">Sep 6, 2022</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}