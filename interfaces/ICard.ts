export interface ICard {
  id: number;
  picture: string;
  title: string;
  button: {
    link: string;
    title: string;
  };
  link: string;
}
