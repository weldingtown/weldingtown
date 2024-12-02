import Logo from '@/assets/img/Brandlogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Our Services',
    href: '#our-services',
  },
  {
    name: 'About Us',
    href: '#about',
  },
  {
    name: 'Contact Us',
    href: '#contact-us',
  },
];

export default function Navbar() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='grid grid-cols-1 md:grid-cols-[30%,70%] shadow-lg backdrop-blur-sm sticky z-10 top-0 bg-white/75 md:bg-white/50 items-center space-x-16 text-lg font-medium'>
      <div className='flex justify-between'>
        {/* Logo */}
        <Image
          className='h-16 max-sm:w-full  aspect-video'
          src={Logo}
          alt='Logo'
          width={400}
          height={50}
        />
        {/* Toggle Button For Moblie only */}
        <button className='md:hidden w-16' onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? 'open' : 'close'}
        </button>
      </div>
        {isOpen && (
          <nav className='md:hidden !m-0'>
            <ul className='flex flex-col px-5 gap-y-3 py-10 overflow-auto text-lg font-medium '>
              {navLinks.map(({ name, href }) => (
                <Link
                  href={href}
                  key={href}
                  className={`${
                    pathname.includes(href)
                      ? 'text-white bg-primary'
                      : 'hover:bg-primary hover:text-white font-medium min-w-16'
                  } border p-2 rounded-md shadow-sm`}
                >
                  {name}
                </Link>
              ))}
            </ul>
          </nav>
        )}
      {/* NavLinks */}
      <nav className='hidden md:block'>
        <ul className='flex space-x-16 text-lg font-medium '>
          {navLinks.map(({ name, href }) => (
            <Link
              href={href}
              key={href}
              className={
                pathname.includes(href)
                  ? 'text-primary'
                  : 'hover:text-primary font-medium min-w-16'
              }
            >
              {name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
