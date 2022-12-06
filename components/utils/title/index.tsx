interface ITitle {
  title: string;
  textSize: string;
  textAlign: string;
}

export default function Title(props: ITitle) {
  const { title, textSize, textAlign } = props;
  return (
    <h1
      className={`${textAlign} ${textSize} whitespace-pre-wrap text-[#222222] uppercase font-bold mb-2`}
    >
      {title}
    </h1>
  );
}
