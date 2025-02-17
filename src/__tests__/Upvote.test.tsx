import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import Upvote from '../presentation/components/Vote/Upvote';

describe('Upvote Component', () => {
  it('should toggle selection state on click', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    const { rerender } = render(<Upvote selected={false} onClick={handleClick} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'false');

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);

    rerender(<Upvote selected={true} onClick={handleClick} />);
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });
}); 