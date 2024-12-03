import { appName } from '@/utils/constants';
import { PhoneIcon } from '@heroicons/react/20/solid';

export default function Footer() {
  const year = new Date().getFullYear();
  const redirectToWhatsApp = () => {
    const phoneNumber = '7219844829';
    const message = 'Hello, I have a question!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, '_blank');
  };
  return (
    <footer className='text-center p-6'>
      {/* WhatsApp Fixed Button */}
      <button
        onClick={redirectToWhatsApp}
        className='fixed z-20 bottom-10 right-6 bg-primary p-2 rounded-full border shadow-md cursor-pointer text-white animate-bounce hover:animate-none transition-all'
      >
        <PhoneIcon className='w-9' />
      </button>

      {/* Social Icons */}

      <p>
        ©Copyright {year}. All Rights Reserved. {appName}
      </p>
    </footer>
  );
}
