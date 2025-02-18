import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import UpvoteList from '../presentation/components/Vote/UpvoteList';

describe('UpvoteList Component', () => {
  it('should add a new upvote when clicking the add button', async () => {
    const user = userEvent.setup();
    const listId = 1;
    render(<UpvoteList listId={listId} />);

    const addButton = screen.getByTestId('add-upvote-button');

    await user.click(addButton);
    const initialUpvotes = screen.getAllByTestId(/upvote-button-/).length;

    const newUpvotes = screen.getAllByTestId(/upvote-button-/).length;
    expect(newUpvotes).toBe(initialUpvotes);
  });
}); 