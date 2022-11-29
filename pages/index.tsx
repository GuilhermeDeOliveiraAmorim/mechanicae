import { useEffect, useState } from "react";
import Header from "../components/header";
import Cover from "../components/main/cover";
import Title from "../components/utils/title";

interface IData {
	a: string;
	b: string;
	c: string;
	d: string;
	e: string;
}

const arrTagsCover = [
	{ title: "mount desert island" },
	{ title: "maine" },
];

export default function Home() {
	const [data, setData] = useState<IData>();
	useEffect(() => {
		setTimeout(() => {
			setData({ a: "a", b: "b", c: "c", d: "d", e: "e" });
		}, 3000);
	}, []);
	return (
		<div>
			<Header />
			<div className="pl-44 pr-44 pb-28">
				<Title title="SIMPLE. MODERN. RESIDENTIAL ARCHITECTURE." size="3xl" />
				<Cover title="cove house" link="blog/cove-house" tags={arrTagsCover} picture="https://images.squarespace-cdn.com/content/v1/58b58a96f5e231aa75f48ec4/48d24486-1bb6-4c39-afdb-13dfdec6c9e7/Squid-Cove-West-Elevation-Dusk.jpg?format=1500w" />
			</div>
		</div>
	);
}
