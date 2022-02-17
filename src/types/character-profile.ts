export interface CharacterProfile {
  id: number;
  name: string;
  description: string;
  image: string;
  tagList?: Array<string>;
  amountComics?: number;
  amountSeries?: number;
  amountStories?: number;
};
