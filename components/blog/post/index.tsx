interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default function Post(props: IPost) {
  const { id, userId, title, body } = props;
  return (
    <div key={id}>
      <h1>{title}</h1>
      <p>{body}</p>
      <span>por: {userId}</span>
    </div>
  );
}
