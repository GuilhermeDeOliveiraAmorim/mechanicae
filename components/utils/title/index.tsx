interface ITitle {
  title: string;
  size: string;
}

export default function Title(props: ITitle) {
  const { title, size } = props;
  return (
    <h1
      className={`text-center whitespace-pre-wrap text-[#222222] text-${size} uppercase font-medium mb-2`}
    >
      {title}
    </h1>
  );
}
