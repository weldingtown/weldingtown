import { appName } from '@/utils/constants';
import { PhoneIcon } from '@heroicons/react/20/solid';

export default function Footer() {
  const year = new Date().getFullYear();
  const phoneNumber = '7219844829';
  const message = 'Hello, I have a question!';

  return (
    <footer className='text-center p-6'>
      {/* WhatsApp Fixed Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-10 right-6 bg-primary p-2 rounded-full border shadow-md cursor-pointer text-white animate-bounce hover:animate-none transition-all'
      >
        <PhoneIcon className='w-9' />
      </a>

      {/* Social Icons */}

      <p>
        ©Copyright {year}. All Rights Reserved. {appName}
      </p>
    </footer>
  );
}
