import { useState, useEffect, useCallback, useMemo } from 'react';
import { VoteList } from '../../types';
import { VoteRepositoryImpl } from '../../infra/data/VoteRepositoryImpl';

/**
 * Custom hook to manage upvote logic.
 * @returns {object} The lists, toggleVote, and addVoteToList functions.
 */
export const useUpvoteLogic = () => {

  const voteRepository = useMemo(() => new VoteRepositoryImpl(), []);

  const [lists, setLists] = useState<VoteList[]>(() => voteRepository.getLists());

  useEffect(() => {
    voteRepository.saveLists(lists);
  }, [lists, voteRepository]);

  const toggleVote = useCallback((listId: number, voteId: number) => {
    setLists(prevLists => 
      prevLists.map(list => 
        list.id === listId
          ? {
              ...list,
              votes: list.votes.map(vote =>
                vote.id === voteId ? { ...vote, selected: !vote.selected } : vote
              )
            }
          : list
      )
    );
  }, []);

  const addVoteToList = useCallback((listId: number) => {
    setLists(prevLists => {
      const existingList = prevLists.find(list => list.id === listId);
      if (existingList) {
        return prevLists.map(list =>
          list.id === listId
            ? {
                ...list,
                votes: [
                  ...list.votes,
                  { id: list.votes.length + 1, selected: false }
                ]
              }
            : list
        );
      } else {
        return [
          ...prevLists,
          { id: listId, votes: [{ id: 1, selected: false }] }
        ];
      }
    });
  }, []);

  return { lists, toggleVote, addVoteToList };
}; 