interface ILabel {
  title: string;
}

export default function Label(props: ILabel) {
  const { title } = props;
  return <span className="p-2">{title}</span>;
}
