/** @format */

const Booking = () => {
  return (
    <div className='p-8 flex flex-col gap-6'>
      <div className=' flex flex-col gap-2 md:items-center md:py-10'>
        <h1 className='text-4xl font-bold lg:w-1/2 lg:text-center'>
          Request a cleaning estimate today
        </h1>
        <p className='text-lg font-bold'>
          <span className='text-sky-500'>Call us: </span> +33 6 52 15 65 75{' '}
        </p>
      </div>

      <form className='ring-1 ring-gray-300 p-4 flex flex-col gap-4 md:mb-10 lg:flex-row lg:gap-6'>
        <div className='flex flex-col gap-2 lg:flex-1'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            className='ring-1 ring-sky-300 p-2 rounded-sm'
          />
        </div>
        <div className='flex flex-col gap-2 lg:flex-1'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            className='ring-1 ring-sky-300 p-2 rounded-sm'
          />
        </div>

        <div className='flex flex-col gap-2 lg:flex-1'>
          <label>Services</label>
          <select className='w-20' name='service'>
            <option value='Home' className='ring-1 ring-sky-300 p-2'>
              Home
            </option>
            <option value='Office'>Office</option>
            <option value='Vehicle'>Vehicle</option>
          </select>
        </div>

        <div className='lg:flex lg:items-center'>
          <button
            type='submit'
            className='w-36 bg-yellow-500 rounded p-3 text-white'
          >
            Estimate
          </button>
        </div>
      </form>
    </div>
  )
}

export default Booking
