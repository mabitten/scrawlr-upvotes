import { VoteRepository } from '../repositories/VoteRepository';

/**
 * Class representing the ToggleVote use case.
 */
export class ToggleVote {
  /**
   * Create a ToggleVote use case.
   * @param {VoteRepository} voteRepository - The repository to manage votes.
   */
  constructor(private voteRepository: VoteRepository) {}

  /**
   * Execute the toggle vote action.
   * @param {number} listId - The ID of the list.
   * @param {number} voteId - The ID of the vote.
   */
  execute(listId: number, voteId: number): void {
    const list = this.voteRepository.getList(listId);
    const updatedList = {
      ...list,
      votes: list.votes.map(vote =>
        vote.id === voteId ? { ...vote, selected: !vote.selected } : vote
      ),
    };
    this.voteRepository.saveList(updatedList);
  }
} 