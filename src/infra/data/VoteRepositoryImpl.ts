import { VoteList } from '../../types';
import { VoteRepository } from '../../domain/repositories';
import { LocalStorage } from '../utils';

enum LocalStorageKeys {
  UpvoteLists = 'upvoteLists',
}

export class VoteRepositoryImpl implements VoteRepository {
  getLists(): VoteList[] {
    return LocalStorage.getItem(LocalStorageKeys.UpvoteLists, []);
  }

  saveLists(lists: VoteList[]): void {
    LocalStorage.setItem(LocalStorageKeys.UpvoteLists, lists);
  }
} 