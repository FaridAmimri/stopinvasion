/** @format */

const Form = () => {
  return (
    <div className='md:w-2/4'>
      <h1 className='text-xl font-bold pb-4 text-sky-500'>
        Entrons en contact
      </h1>
      <form action='' className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor=''>Nom</label>
          <input type='text' className='ring-1 ring-sky-300 p-2 rounded-sm' />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor=''>Sujet</label>
          <input type='text' className='ring-1 ring-sky-300 p-2 rounded-sm' />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor=''>Email</label>
          <input type='email' className='ring-1 ring-sky-300 p-2 rounded-sm' />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor=''>Message</label>
          <textarea rows={8} className='ring-1 ring-sky-300 rounded-sm' />
        </div>
        <div className=''>
          <button
            type='submit'
            className='w-36 bg-yellow-500 rounded p-3 text-white'
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
