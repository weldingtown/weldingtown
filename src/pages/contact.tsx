import ErrorComponent from '@/components/ErrorComponent';
import postContact from '@/services/contact';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const contactSchema = yup.object({
  name: yup.string().required('*required'),
  city: yup.string().required('*required'),
  phoneNumber: yup
    .string()
    .required('*required')
    .min(10, 'Invalid Number')
    .max(12, 'Invalid Number'),
  message: yup.string().notRequired(),
});

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  const onSubmit = async (data: any) => {
    // console.table(data);
    await toast.promise(postContact(data), {
      pending: 'Sending...',
      success: {
        render({ data }) {
          console.log({ data });
          reset();
          return 'Your Form Submitted Successfully 👌';
        },
      },
      error: 'Some Error Occured 🤯',
    });
  };
  return (
    <main
      className='py-16 container mx-auto px-5 flex flex-col gap-y-16'
      id='contact-us'
    >
      <h2 className='heading'>Contact Us</h2>

      <form
        className='flex w-11/12 md:w-3/4 max-w-md mx-auto flex-col gap-x-5 gap-y-7 border shadow-md rounded-md p-10'
        // @ts-ignore
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex text-left gap-2 flex-col relative'>
          <label htmlFor='name' className='font-bold'>
            Name
          </label>
          <input
            className={`py-2 px-4 border shadow-sm rounded-md outline-none focus-within:ring-2 ${
              errors.name?.message ? 'ring-2 ring-red-600' : ''
            }`}
            type='text'
            id='name'
            placeholder='Enter your name'
            {...register('name')}
          />
          <ErrorComponent message={errors.name?.message} />
        </div>

        <div className='flex text-left gap-2 flex-col relative'>
          <label htmlFor='city' className='font-bold'>
            City
          </label>
          <input
            className={`py-2 px-4 border shadow-sm rounded-md outline-none focus-within:ring-2 ${
              errors.city?.message ? 'ring-2 ring-red-600' : ''
            }`}
            type='text'
            id='city'
            placeholder='Enter your city'
            {...register('city')}
          />
          <ErrorComponent message={errors.city?.message} />
        </div>

        <div className='flex text-left gap-2 flex-col relative'>
          <label htmlFor='phoneNumber' className='font-bold'>
            Phone Number
          </label>

          <input
            className={`py-2 px-4 border shadow-sm rounded-md outline-none focus-within:ring-2 ${
              errors.phoneNumber?.message ? 'ring-2 ring-red-600' : ''
            }`}
            type='number'
            id='phoneNumber'
            placeholder='Enter your number'
            {...register('phoneNumber')}
          />
          <ErrorComponent message={errors.phoneNumber?.message} />
        </div>

        <div className='flex text-left gap-2 flex-col relative'>
          <label htmlFor='message' className='font-bold'>
            Message
          </label>

          <textarea
            className={`py-2 px-4 border shadow-sm rounded-md outline-none focus-within:ring-2 ${
              errors.message?.message ? 'ring-2 ring-red-600' : ''
            }`}
            id='message'
            placeholder='Enter your message'
            {...register('message')}
          ></textarea>

          <ErrorComponent message={errors.message?.message} />
        </div>

        <button
          type='submit'
          // disabled={}
          className='px-5 py-2 font-bold text-lg bg-green-700 hover:bg-primary transition-all text-white rounded-md shadow-sm'
        >
          Submit
        </button>
      </form>

      <h2 className='subHeading'>Have Questions? Get in Touch!</h2>
      <section className='grid grid-cols-1 md:grid-cols-2 justify-center'>
        <div className='border bg-slate-200 shadow-md font-semibold rounded-md flex flex-col p-5 max-w-sm w-full mx-auto'>
          <h3 className='h3'>Have any question?</h3>
          <PhoneIcon className='w-10 text-primary' />
          <a href='tel:+917219844829'>+917219844829</a>
        </div>
        <div className='border bg-slate-200 shadow-md font-semibold rounded-md flex flex-col p-5 max-w-sm w-full mx-auto'>
          <h3 className='h3'>Write email</h3>
          <EnvelopeIcon className='w-10 text-primary' />
          <a href='mailto:weldingtown22@gmail.com'>weldingtown22@gmail.com</a>
        </div>
      </section>
    </main>
  );
}
