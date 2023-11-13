# Newsletter Subscription App

## Overview

This React and TypeScript application allows users to subscribe to a newsletter. It integrates with MailChimp to handle email subscriptions and automate email campaigns.

![Newsletter Subscription Form](./src/assets/newsletter-logo.png)

## Features

- Modern, responsive UI for collecting email addresses.
- Seamless integration with MailChimp for subscriber management.
- Utilization of environment variables for secure configuration.

## Configuration

### MailChimp Setup

To use this application, you need to set up your MailChimp account:

1. Obtain your MailChimp API Key.
2. Create a `.env` file in the root directory of the project.
3. Add your MailChimp API Key to the `.env` file:

   ```env
   VITE_MAILCHIMP_API_KEY=your_mailchimp_api_key
   VITE_MAILCHIMP_LIST_ID=your_mailchimp_list_id
   ```

Ensure these values are kept secret and are not committed to your git repository.

## Screenshots

### Desktop View

![Desktop View](./src/assets/desktop-screenshot.png)

### Mobile View

![Mobile View](./src/assets/mobile-print.png)

### Loading State

![Loading State](./src/assets/sending-print.png)

### Success State

![Success State](./src/assets/registered-print.png)

### MailChimp Registered Emails

![MailChimp Registered Emails](./src/assets/mailchimp-print.png)

## Usage

After setting up your MailChimp details in the `.env` file, you can run the application in your local development environment.

## Contributing

Contributions to enhance this application are welcome. Please feel free to submit issues and pull requests.

## Acknowledgements

- React community for the comprehensive ecosystem.
- MailChimp for providing the email marketing platform.
