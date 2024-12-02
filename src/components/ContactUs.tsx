export default function ContactUs() {
  return (
    <div className='container px-5 flex flex-col gap-y-10' id='contact-us'>
      <h2 className='heading'>Contact Us</h2>

      <center>
        <form
          className='flex max-w-md flex-col gap-5 border shadow-md rounded-md p-10'
          action=''
          onSubmit={(e) => e.preventDefault()}
        >
          <div className='flex text-left gap-2 flex-col'>
            <label htmlFor='name' className='font-bold'>
              Name
            </label>
            <input
              className='py-2 px-4 border shadow-sm rounded-md outline-none focus-within:ring-4'
              type='text'
              id='name'
              placeholder='Enter your name'
            />
          </div>
          <div className='flex text-left gap-2 flex-col'>
            <label htmlFor='city' className='font-bold'>
              City
            </label>
            <input
              className='py-2 px-4 border shadow-sm rounded-md outline-none focus-within:ring-4'
              type='text'
              id='city'
              placeholder='Enter your city'
            />
          </div>
          <div className='flex text-left gap-2 flex-col'>
            <label htmlFor='contact' className='font-bold'>
              Phone Number
            </label>

            <input
              className='py-2 px-4 border shadow-sm rounded-md outline-none focus-within:ring-4'
              type='text'
              id='contact'
              placeholder='Enter your number'
            />
          </div>

          <button
            type='submit'
            className='px-5 py-2 font-bold text-lg bg-primary text-white rounded-md shadow-sm'
          >
            Submit
          </button>
        </form>
      </center>
    </div>
  );
}
