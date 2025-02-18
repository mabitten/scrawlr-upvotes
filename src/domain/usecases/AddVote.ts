import { VoteRepository } from '../repositories/VoteRepository';
import { VoteList } from '../../types';

/**
 * Class representing the AddVote use case.
 */
export class AddVote {
  /**
   * Create an AddVote use case.
   * @param {VoteRepository} voteRepository - The repository to manage votes.
   */
  constructor(private voteRepository: VoteRepository) {}

  /**
   * Execute the add vote action.
   * @param {number} listId - The ID of the list to which a vote will be added.
   */
  execute(listId: number): void {
    const list = this.voteRepository.getList(listId);
    const updatedList: VoteList = {
      ...list,
      votes: [...list.votes, { id: list.votes.length + 1, selected: false }],
    };
    this.voteRepository.saveList(updatedList);
  }
} 