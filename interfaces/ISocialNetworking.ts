interface ISocialNetwork {
  id: number;
  name: string;
  link: string;
}

export interface ISocialNetworking {
  networking: ISocialNetwork[] | undefined;
}
