interface ISubtitle {
  subtitle?: string;
}

export default function Subtitle(props: ISubtitle) {
  const { subtitle } = props;
  return (
    <h2 className="text-center whitespace-pre-wrap break-words font-normal text-[#222222] text-sm">
      {subtitle}
    </h2>
  );
}
