import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CustomForm } from '../src/components/CustomForm';

describe('CustomForm', () => {
  const mockOnValidated = jest.fn();

  beforeEach(() => {
    mockOnValidated.mockClear();
  });

  it('renders input and submit button', () => {
    render(<CustomForm onValidated={mockOnValidated} status={null} message={null} />);
    expect(screen.getByPlaceholderText('youremail@example.com')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
  });

  it('calls onValidated with the email when a valid email is submitted', async () => {
    render(<CustomForm onValidated={mockOnValidated} status={null} message={null} />);
    fireEvent.change(screen.getByPlaceholderText('youremail@example.com'), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));
    await waitFor(() => {
      expect(mockOnValidated).toHaveBeenCalledWith({ EMAIL: 'test@example.com' });
    });
  });

  it('does not call onValidated when an invalid email is submitted', () => {
    render(<CustomForm onValidated={mockOnValidated} status={null} message={null} />);
    fireEvent.change(screen.getByPlaceholderText('youremail@example.com'), { target: { value: 'invalid-email' } });
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));
    expect(mockOnValidated).not.toHaveBeenCalled();
  });
});
