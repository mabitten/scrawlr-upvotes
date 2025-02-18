import { VoteList } from '../../types';

export interface VoteRepository {
  getList(listId: number): VoteList;
  saveList(lists: VoteList): void;
} 