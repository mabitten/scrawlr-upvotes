import { memo, useEffect, useCallback } from "react";

import { useUpvoteLogic } from "../../hooks";
import { UpvoteListAdd, Upvote } from './';
import { Vote } from "../../../types";

type UpvoteListProps = {
  listId: number;
};

const UpvoteList: React.FC<UpvoteListProps> = memo(({ listId }) => {
  const { list, toggleVote, addVoteToList, startAddVoteToList } = useUpvoteLogic(listId);

  useEffect(function startAddVoteToList() {
    if (Object.keys(list).length === 0) {
      startAddVoteToList();
    }
  }, [list, listId, startAddVoteToList]);

  const handleAddVote = useCallback(() => {
    addVoteToList();
  }, [addVoteToList]);

  return (
    <div className="grid grid-cols-[9fr_1fr] items-center gap-2">
      <div className="flex flex-wrap gap-2">
        {list?.votes?.map((vote: Vote) => (
          <Upvote
            key={vote.id}
            selected={vote.selected}
            onClick={() => toggleVote(vote.id)}
            data-testid={`upvote-button-${vote.id}`}
          />
        ))}
      </div>
      <UpvoteListAdd
        onAddVote={handleAddVote}
        data-testid="add-upvote-button"
      />
    </div>
  );
});

export default UpvoteList; 