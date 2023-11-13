export const getMailchimpUrl = () => {
    const url = import.meta.env.VITE_MAILCHIMP_URL;
    if (!url) {
      throw new Error('VITE_MAILCHIMP_URL is not defined. Make sure to set it in your .env file.');
    }
    return url;
};
  