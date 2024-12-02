import d1 from '@/assets/img/doorstepServices/01. Shutter Repair img.jpg';
import d2 from '@/assets/img/doorstepServices/02.Repair and Maintenance Welding img.jpg';
import d3 from '@/assets/img/doorstepServices/03. Sheds Making imag.jpg';
import d4 from '@/assets/img/doorstepServices/04. Automotive Welding Services img.jpg';
import d5 from '@/assets/img/doorstepServices/05. Window and Door Frame Welding img.jpg';
import d6 from '@/assets/img/doorstepServices/06. Pipe and Plumbing Weld Repairs img.jpg';
import s1 from '@/assets/img/services/01. shutter img.jpg';
import s2 from '@/assets/img/services/02. metal gates.jpg';
import s3 from '@/assets/img/services/03. Stainless steel gate img.webp';
import s4 from '@/assets/img/services/04. Railing and grill image.jpg';
import s5 from '@/assets/img/services/05. Staircase image.jpg';
import s6 from '@/assets/img/services/06. Fencing.jpg';
import s7 from '@/assets/img/services/07. Tree gaurd.jpg';
import s8 from '@/assets/img/services/08. Sheds.jpg';

import MainSlider from '@/components/MainSlider';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const services = [
  { title: 'shutter', img: s1 },
  { title: 'metal gates', img: s2 },
  { title: 'stainless steel gates', img: s3 },
  { title: 'railing & grills', img: s4 },
  { title: 'staircase', img: s5 },
  { title: 'fencing', img: s6 },
  { title: 'tree guard', img: s7 },
  { title: 'sheds', img: s8 },
];
const topServices = [
  { title: '24/7 SERVICES', desc: 'We are 24/7 available to serve You' },
  { title: 'OUR SERVICE LOCATIONS', desc: 'All Over Mumbai and Navi Mumbai' },
  { title: 'HIGH QUALITY WORK', desc: 'High Quality Services and Product' },
];

const doorstepServices = [
  {
    title: 'Shutter Repairing',
    desc: 'Repairing, reinforcing, or installing metal shutters for shops, garages, and commercial spaces.',
    img: d1,
  },
  {
    title: 'Repair and Maintenance Welding',
    desc: 'Fixing gates, grills, fences, doors, and other metal structures right at the customer’s location.',
    img: d2,
  },
  {
    title: 'Shed Making',
    desc: 'Custom designing and constructing metal sheds for storage or workspace at your location.',
    img: d3,
  },
  {
    title: 'Automotive Welding Services',
    desc: 'Minor welding repairs for car and bike parts, exhaust systems, frames, and other metal components.',
    img: d4,
  },
  {
    title: 'Window and Door Frame Welding',
    desc: 'Repairing or installing metal frames for doors and windows, as well as aligning or fixing loose hinges.',
    img: d5,
  },
  {
    title: 'Pipe and Plumbing Weld Repairs',
    desc: 'Welding services for metal pipes, plumbing systems, and pipe fittings.',
    img: d6,
  },
];

export default function Home() {
  return (
    <main className={`${inter.className} flex flex-col gap-y-16 pb-16`}>
      {/* Slider */}
      <MainSlider />

      {/* Slogan */}
      <section className='container mx-auto grid grid-cols-1 md:grid-cols-3 justify-center gap-10'>
        {topServices.map(({ title, desc }) => (
          <div
            className='text-center bg-slate-200 border-2 shadow-md rounded-md p-10'
            key={title}
          >
            <h3 className='text-xl font-bold mb-4 uppercase'>{title}</h3>
            <p className='text-lg'>{desc}</p>
          </div>
        ))}
      </section>

      {/* Doorstep Sevices */}
      <div className='flex flex-col gap-y-10'>
        <h2 className='heading'>Doorstep Services</h2>
        <section className='container mx-auto grid grid-cols-1 md:grid-cols-3 justify-center gap-10'>
          {doorstepServices.map(({ title, desc, img }) => (
            <div
              className='w-11/12 mx-auto border-2 shadow-md rounded-md overflow-hidden cursor-pointer'
              key={title}
            >
              <Image
                src={img}
                className='w-full aspect-video hover:scale-105 transition-all'
                width={900}
                height={400}
                alt={title}
              />
              <div className='p-5'>
                <h3 className='text-xl font-bold mb-4 uppercase'>{title}</h3>
                <p className='text-lg'>{desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Sevices */}
      <div className='flex flex-col gap-y-10' id='our-services'>
        <h2 className='heading'>Our Services</h2>
        <section className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-10'>
          {services.map(({ title, img }) => (
            <div
              className='w-11/12 mx-auto border-2 shadow-md rounded-md overflow-hidden cursor-pointer'
              key={title}
            >
              <Image
                src={img}
                className='w-full aspect-square hover:scale-105 transition-all'
                width={900}
                height={600}
                alt={title}
              />
              <h3 className='p-5 text-center text-xl font-bold uppercase'>
                {title}
              </h3>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
