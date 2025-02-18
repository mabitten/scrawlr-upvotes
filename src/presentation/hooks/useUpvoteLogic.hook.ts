import { useState, useEffect, useMemo, useCallback } from 'react';

import { VoteList } from '../../types';
import { VoteRepositoryImpl } from '../../infra/data/VoteRepositoryImpl';
import { AddVote, ToggleVote } from '../../domain/usecases';

/**
 * Custom hook to manage upvote logic.
 * @returns {object} The lists, toggleVote, and addVoteToList functions.
 */
export const useUpvoteLogic = (listId: number) => {
  const voteRepository = useMemo(() => new VoteRepositoryImpl(), []);
  const addVoteUseCase = useMemo(() => new AddVote(voteRepository), [voteRepository]);
  const toggleVoteUseCase = useMemo(() => new ToggleVote(voteRepository), [voteRepository]);

  const [list, setList] = useState<VoteList>(() => voteRepository.getList(listId) || { id: listId, votes: [] });

  useEffect(function saveListToStorage() {
    voteRepository.saveList(list);
  }, [list, voteRepository]);

  const toggleVote = useCallback((voteId: number) => {
    toggleVoteUseCase.execute(listId, voteId);
    setList(voteRepository.getList(listId));
  }, [listId, toggleVoteUseCase, voteRepository]);

  const addVoteToList = useCallback(() => {
    addVoteUseCase.execute(listId);
    setList(voteRepository.getList(listId));
  }, [listId, addVoteUseCase, voteRepository]);

  const startAddVoteToList = useCallback(() => {
    setList({ id: listId, votes: [{ id: 0, selected: false }] });
  }, [listId]);

  return { list, toggleVote, addVoteToList, startAddVoteToList };
}; 