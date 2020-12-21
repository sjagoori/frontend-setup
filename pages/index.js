import Head from 'next/head'
import Button from '../components/button/Button'
import TextInput from '../components/input/text/TextInput'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Front-end setup</title>
      </Head>

      <h1>Front-end Setup</h1>

      <div>
        <h2>Buttons</h2>
        <Button
          label='primary'
          url='#'
          variant='primary'
        />

        <Button
          label='secondary'
          url='#'
          variant='secondary'
        />

        <Button
          label='ghost'
          url='#'
          variant='ghost'
        />

        <Button
          label='text'
          url='#'
          variant='text'
        />
      </div>

      <div>
        <h2>Inputs</h2>

        <TextInput
          placeholder='Placeholder text'
        />

      </div>
    </>
  )
}