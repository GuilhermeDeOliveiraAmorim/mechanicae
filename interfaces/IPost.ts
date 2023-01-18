import { ITag } from "./ITag";

export interface IPost {
  body: string;
  comments: {
    body: string;
    id: number;
    name: string;
    postId: number;
  }[];
  created: string;
  id: number;
  likes: number;
  title: string;
  user: {
    name: string;
    id: number;
  };
  userId: number;
  tags: ITag[];
}
