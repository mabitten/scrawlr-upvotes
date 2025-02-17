import { VoteList } from '../../types';

export interface VoteRepository {
  getLists(): VoteList[];
  saveLists(lists: VoteList[]): void;
} 