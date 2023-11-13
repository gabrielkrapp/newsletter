import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SimpleForm } from '../src/components/MailChimpForm';

jest.mock('../src/utils/GetMailChimpUrl', () => ({
  getMailchimpUrl: () => 'mocked-mailchimp-url'
}));

jest.mock('react-mailchimp-subscribe', () => ({
  MailchimpSubscribe: ({ render }) => render({ subscribe: jest.fn(), status: 'success', message: null }),
}));

describe('SimpleForm', () => {
  it('renders correctly with the MailchimpSubscribe', () => {
    const { getByText } = render(<SimpleForm />);
    expect(getByText('Successfully registered!')).toBeInTheDocument();
  });

});
