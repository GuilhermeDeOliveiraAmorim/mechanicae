import { useEffect, useState } from "react";
import Header from "../components/header";

interface IData {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
}

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
      {/* <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div
          className={data ? "flex space-x-4" : "animate-pulse flex space-x-4"}
        >
          <div className="rounded-full bg-slate-200 h-10 w-10">{data?.a}</div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 ">{data?.b}</div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200  col-span-2">{data?.c}</div>
                <div className="h-2 bg-slate-200  col-span-1">{data?.d}</div>
              </div>
              <div className="h-2 bg-slate-200 ">{data?.e}</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
