import React from 'react'
import Form, { FormPresenterProps } from '.'

export default { title: 'organisms/Form' }

const props: FormPresenterProps = {
  error: 0,
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => e.preventDefault()
}

export const formStories = () => <Form {...props} />
