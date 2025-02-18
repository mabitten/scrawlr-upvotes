import React, { memo } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

import { Button } from "../ui";

type UpvoteListAddProps = {
  onAddVote: () => void;
};

const UpvoteListAdd: React.FC<UpvoteListAddProps> = memo(({ onAddVote, ...props }) => {
  return (
    <Button
      onClick={onAddVote}
      variant="default"
      aria-label="Add new upvote"
      {...props}
    >
      <PlusIcon className="h-5 w-5" />
    </Button>
  );
}, (prevProps, nextProps) => prevProps.onAddVote === nextProps.onAddVote);

export default UpvoteListAdd; 