import { UpvoteList, CardFill as UpvoteCard } from "./components";

const App: React.FC = () => {
  return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UpvoteCard title="List 1">
            <UpvoteList listId={1} />
          </UpvoteCard>
          <UpvoteCard title="List 2">
            <UpvoteList listId={2} />
          </UpvoteCard>
          <UpvoteCard title="List 3">
            <UpvoteList listId={3} />
          </UpvoteCard>
        </div>
      </div>
  );
};

export default App; 