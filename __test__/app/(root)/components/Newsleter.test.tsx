import { describe, expect, it, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Newsletter from '@/app/(root)/components/Newsletter';
import { convertKitFormId } from '@/lib/convertKitFormId';

describe('Newsletter component', () => {
  const { heroFormId } = convertKitFormId;
  const subscribeEmail = vi.fn((e) => e.preventDefault());

  it('should be render without errors', () => {
    const { getByTestId } = render(
      <Newsletter formId={heroFormId} onSubscribe={subscribeEmail} />,
    );

    expect(getByTestId('newsletterForm')).toBeInTheDocument();
    expect(getByTestId('newsletterInput')).toBeInTheDocument();
    expect(getByTestId('newsletterButton')).toBeInTheDocument();
    expect(getByTestId('correctMessage')).toHaveClass('invisible');
  });

  it('should not submitting form with empty email', () => {
    const { getByTestId } = render(
      <Newsletter formId={heroFormId} onSubscribe={subscribeEmail} />,
    );

    const submitButton = getByTestId('newsletterButton');

    // Simulate user input
    fireEvent.click(submitButton);

    expect(subscribeEmail).not.toHaveBeenCalled();
  });

  it('should not submitting form with wrong formatted email', () => {
    const { getByTestId } = render(
      <Newsletter formId={heroFormId} onSubscribe={subscribeEmail} />,
    );

    const emailInput = getByTestId('newsletterInput');
    const submitButton = getByTestId('newsletterButton');

    // Simulate user input
    fireEvent.change(emailInput, {
      target: {
        value: 'test@',
      },
    });
    fireEvent.click(submitButton);

    expect(subscribeEmail).not.toHaveBeenCalled();
  });

  it('should display success message with correctly formatted email', async () => {
    const { getByTestId } = render(
      <Newsletter formId={heroFormId} onSubscribe={subscribeEmail} />,
    );

    const emailInput = getByTestId('newsletterInput');
    const submitButton = getByTestId('newsletterButton');

    // Simulate user input
    fireEvent.change(emailInput, {
      target: {
        value: 'test@example.com',
      },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(subscribeEmail).toHaveBeenCalledOnce();
    });
  });
});
