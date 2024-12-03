import { appName } from '@/utils/constants';
import { PhoneIcon } from '@heroicons/react/20/solid';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='text-center p-6'>
      {/* CTA Fixed Button */}
      <a
        href='tel:+917219844829'
        className='fixed bottom-10 right-6 bg-primary p-2 rounded-full border shadow-md cursor-pointer text-white animate-bounce hover:animate-none transition-all'
      >
        <PhoneIcon className='w-9' />
      </a>
      {/* Social Icons */}
      <section></section>

      <p>
        ©Copyright {year}. All Rights Reserved. {appName}
      </p>
    </footer>
  );
}
