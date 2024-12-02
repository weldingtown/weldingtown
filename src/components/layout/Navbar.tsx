import Logo from '@/assets/img/Brandlogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  return (
    <header className='grid grid-cols-1 md:grid-cols-[30%,70%] shadow-lg backdrop-blur-sm sticky z-10 top-0 bg-white/50 items-center space-x-16 text-lg font-medium'>
      {/* Logo */}
      <Image
        className='h-16 max-sm:w-full  aspect-video'
        src={Logo}
        alt='Logo'
        width={400}
        height={50}
      />

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
