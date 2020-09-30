import React from 'react'
import { actions } from '@storybook/addon-actions'
import Button, { ButtonPresenterProps } from '.'

export default { title: 'atoms/Button' }

const props: ButtonPresenterProps = {
  name: 'ボタン',
  ...actions('onClick')
}

export const buttonStories = () => <Button {...props} />
