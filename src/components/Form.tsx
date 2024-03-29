/** @format */

import { useState } from 'react'
import { FormType } from '../types/types'
import { useToast } from '@/components/ui/use-toast'

const initialValues: FormType = {
  name: '',
  subject: '',
  email: '',
  message: ''
}

const Form = () => {
  const [formState, setformState] = useState(initialValues)

  const { toast } = useToast()

  const handleInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setformState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const body =
      'Name: ' +
      formState.name +
      '<br/> Email: ' +
      formState.email +
      '<br/> Sujet: ' +
      formState.subject +
      '<br/> Message: ' +
      formState.message

    const config = {
      SecureToken: '502c2030-2675-40bf-bf4d-eebf6f64e3cc',
      To: 'contact@stopinvasion.fr',
      From: 'contact@stopinvasion.fr',
      Subject: formState.subject,
      Body: body
    }

    // @ts-ignore
    if (window.Email) {
      // @ts-ignore
      await window.Email.send(config)
        .then(
          () =>
            toast({
              title: 'Votre email a bien été envoyé !',
              variant: 'success'
            }),
          setformState(initialValues)
        )
        .catch(() =>
          toast({
            title: `Une erreur s'est produite !`,
            variant: 'destructive'
          })
        )
    }
  }

  return (
    <div className='md:w-2/4'>
      <h1 className='text-xl font-bold pb-4 text-green-500'>
        Entrons en contact
      </h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor=''>Nom</label>
          <input
            type='text'
            name='name'
            value={formState.name}
            onChange={handleInput}
            className='p-2 border border-green-500  rounded-sm focus:border-red-500 outline-none'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor=''>Subject</label>
          <input
            type='text'
            name='subject'
            value={formState.subject}
            onChange={handleInput}
            className='p-2 border border-green-500 rounded-sm focus:border-red-500 outline-none'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            name='email'
            value={formState.email}
            onChange={handleInput}
            className='p-2 border border-green-500 rounded-sm focus:border-red-500 outline-none'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor=''>Message</label>
          <textarea
            rows={6}
            name='message'
            value={formState.message}
            onChange={handleInput}
            className='border border-green-500 rounded-sm focus:border-red-500 outline-none'
          />
        </div>
        <div className=''>
          <button
            type='submit'
            className='w-36 bg-green-500 hover:bg-red-400 rounded p-3 text-white'
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
