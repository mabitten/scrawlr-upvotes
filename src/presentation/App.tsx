import React from 'react';
import { UpvoteList, CardFill as UpvoteCard } from "./components";
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UpvoteCard title="List 1">
            <UpvoteList listId={1} />
          </UpvoteCard>
          <UpvoteCard title="List 2">
            <UpvoteList listId={2} />
          </UpvoteCard>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App; 