import { useState } from 'react';

interface CustomFormProps {
  onValidated: (data: { EMAIL: string }) => void;
  status: string | null;
  message: string | Error | null;
}

export const CustomForm: React.FC<CustomFormProps> = ({ status, onValidated, message }) => {
  const [email, setEmail] = useState('');
  const errorMessage = message instanceof Error ? message.message : message;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email && email.includes('@') && onValidated({ EMAIL: email });
    setEmail('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Subscribe to the Newsletter</h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              placeholder="youremail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-2">
          <div className="w-full px-3">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Subscribe
            </button>
          </div>
            {status === 'sending' && (
              <div className="text-blue-500 mt-5">Sending...</div>
            )}
            {status === 'error' && (
              <div className="text-red-500 mt-5">{errorMessage}</div>
            )}
            {status === 'success' && (
              <div className="text-green-500 mt-5">Successfully registered!</div>
            )}
        </div>
      </form>
    </div>
  );
};
