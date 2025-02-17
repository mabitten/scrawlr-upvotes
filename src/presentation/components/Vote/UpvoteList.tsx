import { memo, useEffect } from "react";

import { useUpvoteLogic } from "../../hooks";
import { UpvoteListAdd, Upvote } from './';
import { Vote } from "../../../types";

type UpvoteListProps = {
  listId: number;
};

const UpvoteList: React.FC<UpvoteListProps> = memo(({ listId }) => {
  const { lists, toggleVote, addVoteToList } = useUpvoteLogic();
  const list = lists.find((list: Pick<Vote, 'id'>) => list.id === listId);

  useEffect(() => {
    if (!list) {
      addVoteToList(listId);
    }
  }, [list, listId, addVoteToList]);

  return (
    <div className="grid grid-cols-[9fr_1fr] items-center gap-2">
      <div className="flex flex-wrap gap-2">
        {list?.votes.map((vote: Vote) => (
          <Upvote
            key={vote.id}
            selected={vote.selected}
            onClick={() => toggleVote(listId, vote.id)}
            data-testid={`upvote-button-${vote.id}`}
          />
        ))}
      </div>
      <UpvoteListAdd
        addVoteToList={addVoteToList}
        listId={listId}
        data-testid="add-upvote-button"
      />
    </div>
  );
});

export default UpvoteList; 