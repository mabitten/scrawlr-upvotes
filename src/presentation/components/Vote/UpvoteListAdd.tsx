import { memo } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

import { Button } from "../ui";

type UpvoteListAddProps = {
  addVoteToList: (listId: number) => void;
  listId: number;
};

const UpvoteListAdd: React.FC<UpvoteListAddProps> = memo(({ addVoteToList, listId, ...props }) => {
  return (
    <Button
      onClick={() => addVoteToList(listId)}
      variant="default"
      aria-label="Add new upvote"
      {...props}
    >
      <PlusIcon className="h-5 w-5" />
    </Button>
  );
});

export default UpvoteListAdd; 