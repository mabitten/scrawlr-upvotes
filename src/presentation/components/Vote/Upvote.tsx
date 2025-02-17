import { memo } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

import { Button } from "../ui";

type UpvoteProps = {
  selected: boolean;
  onClick: () => void;
};

const Upvote: React.FC<UpvoteProps> = memo(({ selected, onClick, ...props }) => {
  return (
    <Button
      onClick={onClick}
      variant={selected ? 'selected' : 'default'}
      aria-pressed={selected}
      {...props}
    >
      <ChevronUpIcon className={`h-4 w-4 ${selected ? 'text-blue-500' : 'text-gray-900'}`} />
    </Button>
  );
});

export default Upvote; 