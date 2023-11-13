import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';
import { CustomForm } from './CustomForm';
import { getMailchimpUrl } from '../utils/GetMailChimpUrl';

const url = getMailchimpUrl()

export const SimpleForm = () => (
    <MailchimpSubscribe
      url={url!}
      render={({ subscribe, status, message }) => (
        <CustomForm
          onValidated={(formData: EmailFormFields) => subscribe(formData)}
          status={status}
          message={message}
        />
      )}
    />
);