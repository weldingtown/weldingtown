import Logo from '@/assests/images/Brandlogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '#about',
  },
  {
    name: 'Our Services',
    href: '/services',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
];

export default function Navbar() {
  const { pathname } = useRouter();
  return (
    <header className='flex shadow-lg backdrop-blur-sm sticky top-0 bg-white/40 border-b-2 items-center space-x-16 text-lg font-medium '>
      {/* Logo */}
      <Image
        className='h-16 aspect-video'
        src={Logo}
        alt='Logo'
        width={300}
        height={50}
      />

      {/* NavLinks */}
      <nav>
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
