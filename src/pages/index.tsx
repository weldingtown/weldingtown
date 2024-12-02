import s1 from '@/assets/img/services/01. shutter img.jpg';
import s2 from '@/assets/img/services/02. metal gates.jpg';
import s3 from '@/assets/img/services/03. Stainless steel gate img.webp';
import s4 from '@/assets/img/services/04. Railing and grill image.jpg';
import s5 from '@/assets/img/services/05. Staircase image.jpg';
import s6 from '@/assets/img/services/06. Fencing.jpg';
import MainSlider from '@/components/MainSlider';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });
const topServices = [
  { title: '24/7 SERVICES', desc: 'We are 24/7 available to serve You' },
  { title: 'OUR SERVICE LOCATIONS', desc: 'All Over Mumbai and Navi Mumbai' },
  { title: 'HIGH QUALITY WORK', desc: 'High Quality Services and Product' },
];

const services = [
  {
    title: 'Shutter Repairing',
    desc: 'Repairing, reinforcing, or installing metal shutters for shops, garages, and commercial spaces.',
    img: s1,
  },
  {
    title: 'Repair and Maintenance Welding',
    desc: 'Fixing gates, grills, fences, doors, and other metal structures right at the customer’s location.',
    img: s2,
  },
  {
    title: 'Shed Making',
    desc: 'Custom designing and constructing metal sheds for storage or workspace at your location.',
    img: s3,
  },
  {
    title: 'Automotive Welding Services',
    desc: 'Minor welding repairs for car and bike parts, exhaust systems, frames, and other metal components.',
    img: s4,
  },
  {
    title: 'Window and Door Frame Welding',
    desc: 'Repairing or installing metal frames for doors and windows, as well as aligning or fixing loose hinges.',
    img: s5,
  },
  {
    title: 'Pipe and Plumbing Weld Repairs',
    desc: 'Welding services for metal pipes, plumbing systems, and pipe fittings.',
    img: s6,
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
            className='w-11/12 mx-auto border-2 shadow-md rounded-md p-10'
            key={title}
          >
            <h3 className='text-xl font-bold mb-4'>{title}</h3>
            <p className='text-lg'>{desc}</p>
          </div>
        ))}
      </section>

      {/* Sevices */}
      <div className='flex flex-col gap-y-10' id='our-services'>
        <h2 className='heading'>Doorstep Services</h2>
        <section className='container mx-auto grid grid-cols-1 md:grid-cols-3 justify-center gap-10'>
          {services.map(({ title, desc, img }) => (
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
                <h3 className='text-xl font-bold mb-4'>{title}</h3>
                <p className='text-lg'>{desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
