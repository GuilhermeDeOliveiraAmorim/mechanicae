export interface IAbout {
  about: {
    picture: string;
    name: string;
    degree: string;
    text: {
      id: number;
      p: string;
    }[];
  };
}
