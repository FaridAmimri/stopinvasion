/** @format */

const Hero = () => {
  return (
    <div className='h-[calc(100vh-6rem)] flex flex-col p-8 gap-6 lg:flex-row md:gap-10 md:h-[calc(100vh-7rem)]'>
      <div className='flex-1 flex flex-col justify-between md:justify-around'>
        <h2 className='text-4xl font-extrabold leading-normal md:text-7xl'>
          Meet the Best Cleaning Services
        </h2>
        <span className='text-lg text-gray-400 font-semibold md:w-2/3 2xl:text-3xl'>
          Trust ensures every service we offer will get your home cleaner and
          healthier
        </span>
        <div className='flex justify-between text-lg md:w-2/3'>
          <button className='w-40 bg-yellow-500 rounded p-2 px-6 text-white'>
            Book now
          </button>
          <button className='w-40 border-sky-500 border-2 rounded p-2 px-6 text-sky-500'>
            Contact us
          </button>
        </div>
      </div>
      <div className='flex-1 overflow-hidden'>
        <img src='/cleaning.png' className='object-cover' />
      </div>
    </div>
  )
}

export default Hero
