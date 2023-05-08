import Head from 'next/head'
import { NextPage } from 'next'
import { FormEvent } from 'react'

import env from '@/config/env'
import Button from '@/components/button/Button'
import Container from '@/components/misc/Container'
import TextInput from '@/components/input/TextInput'
import TextareaInput from '@/components/input/TextareaInput'

interface FormElements extends HTMLFormControlsCollection {
  firstname: HTMLInputElement
  lastname: HTMLInputElement
  email: HTMLInputElement
  message: HTMLInputElement
}

interface ContactFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

const Contact: NextPage = () => {
  const handleFormSubmission = (event: FormEvent<ContactFormElement>) => {
    event.preventDefault()

    const { firstname, lastname, email, message } = event.currentTarget.elements

    console.log(firstname.value)
    console.log(lastname.value)
    console.log(email.value)
    console.log(message.value)
  }

  return (
    <>
      <Head>
        <title>Contact | {env.name}</title>
      </Head>

      <div className="w-full bg-gray-700 text-light py-8">
        <Container>
          <form
            method="post"
            onSubmit={handleFormSubmission}
            className="[&>div>div>div>label]:font-bold [&>div>div>div>input]:min-w-[calc(100%-10%)] md:[&>div>div>div>input]:min-w-[calc(100%-35%)] bg-white text-text dark:text-light dark:bg-dark outline outline-2 outline-gray-200 rounded-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="bg-contact-bg bg-no-repeat bg-center bg-cover"></div>
              <div className="p-4 md:p-8 xl:p-12 flex flex-col gap-4 items-start">
                <div className="flex flex-col items-start gap-1 w-full">
                  <label htmlFor="firstname">Firstname</label>
                  <TextInput
                    name="firstname"
                    id="firstname"
                    required
                    minLength={3}
                    maxLength={50}
                  />
                </div>

                <div className="flex flex-col items-start gap-1 w-full">
                  <label htmlFor="lastname">Lastname</label>
                  <TextInput name="lastname" id="lastname" maxLength={50} />
                </div>

                <div className="flex flex-col items-start gap-1 w-full">
                  <label htmlFor="email">Email</label>
                  <TextInput name="email" id="email" required />
                </div>

                <div className="flex flex-col items-start gap-1 w-full">
                  <label htmlFor="message">Message</label>
                  <TextareaInput
                    name="message"
                    id="message"
                    rows={5}
                    cols={28}
                    required
                    minLength={5}
                    maxLength={1000}
                  />
                </div>

                <Button type="submit">Say hello 👋</Button>
              </div>
            </div>
          </form>
        </Container>
      </div>
    </>
  )
}

export default Contact
