import Logo from '@/assets/img/Brandlogo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
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
    href: '/contact',
  },
];

export default function Navbar() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className='grid grid-cols-1 md:grid-cols-[30%,70%] shadow-lg backdrop-blur-sm sticky z-10 top-0 bg-white/75 md:bg-white/50 items-center space-x-16 text-lg font-medium'>
      <div className='flex justify-between'>
        {/* Logo */}
        <Link href='/' className='w-full' onClick={closeMenu}>
          <Image
            className='h-16 max-sm:w-full  aspect-video'
            src={Logo}
            alt='Logo'
            width={400}
            height={50}
          />
        </Link>
        {/* Toggle Button For Moblie only */}
        <button
          className='md:hidden w-16 flex justify-center items-center'
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <Bars3Icon className='w-10' />
          ) : (
            <XMarkIcon className='w-10' />
          )}
        </button>
      </div>
      {isOpen && (
        <nav className='md:hidden !m-0'>
          <ul className='flex uppercase flex-col px-5 gap-y-3 py-10 overflow-auto'>
            {navLinks.map(({ name, href }) => (
              <Link
                href={href}
                key={href}
                className={`${
                  pathname === href
                    ? 'text-white bg-primary'
                    : 'hover:text-white hover:bg-primary '
                } border p-2 rounded-md shadow-sm font-bold text-base min-w-16`}
                onClick={closeMenu}
              >
                {name}
              </Link>
            ))}
          </ul>
        </nav>
      )}
      {/* NavLinks */}
      <nav className='hidden md:block'>
        <ul className='flex space-x-16 text-lg uppercase'>
          {navLinks.map(({ name, href }) => (
            <Link
              href={href}
              key={href}
              className={`${
                pathname === href ? 'text-primary' : 'hover:text-primary'
              } font-bold min-w-16`}
            >
              {name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
