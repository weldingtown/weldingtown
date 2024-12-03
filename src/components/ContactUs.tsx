import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ErrorComponent from './ErrorComponent';

const schema = yup.object({
  name: yup.string().required('*required'),
  city: yup.string().required('*required'),
  phoneNumber: yup
    .string()
    .required('*required')
    .min(10, 'Invalid Number')
    .max(12, 'Invalid Number'),
});

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className='container px-5 flex flex-col gap-y-10' id='contact-us'>
      <h2 className='heading'>Contact Us</h2>

      <center>
        <form
          className='flex max-w-md flex-col gap-x-5 gap-y-7 border shadow-md rounded-md p-10'
          action=''
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
            <label htmlFor='contact' className='font-bold'>
              Phone Number
            </label>

            <input
              className={`py-2 px-4 border shadow-sm rounded-md outline-none focus-within:ring-2 ${
                errors.phoneNumber?.message ? 'ring-2 ring-red-600' : ''
              }`}
              type='number'
              id='contact'
              placeholder='Enter your number'
              {...register('phoneNumber')}
            />
            <ErrorComponent message={errors.phoneNumber?.message} />
          </div>

          <button
            type='submit'
            className='px-5 py-2 font-bold text-lg bg-green-700 hover:bg-primary transition-all text-white rounded-md shadow-sm'
          >
            Submit
          </button>
        </form>
      </center>
    </div>
  );
}
