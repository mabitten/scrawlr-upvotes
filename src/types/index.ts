export type Vote = {
  id: number;
  selected: boolean;
}

export type VoteList = {
  id: number;
  votes: Vote[];
}