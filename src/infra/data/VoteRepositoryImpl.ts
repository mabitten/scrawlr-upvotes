import { VoteList } from '../../types';
import { VoteRepository } from '../../domain/repositories';
import { LocalStorage } from '../utils';

enum LocalStorageKeys {
  UpvoteListPrefix = 'upvoteList-',
}

export class VoteRepositoryImpl implements VoteRepository {
  getList(listId: number): VoteList {
    const key = `${LocalStorageKeys.UpvoteListPrefix}${listId}`;
    return LocalStorage.getItem(key);
  }

  saveList(list: VoteList): void {
    LocalStorage.setItem(`${LocalStorageKeys.UpvoteListPrefix}${list.id}`, list);
  }
} 