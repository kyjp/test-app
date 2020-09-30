import React from 'react'
import { actions } from '@storybook/addon-actions'
import Input, { InputPresenterProps } from '.'

export default { title: 'atoms/Input' }

const props: InputPresenterProps = {
  placeholder: '入力してください',
  ...actions('onChange')
}

export const inputStories = () => <Input {...props} />

export const defalutValue = () => <Input {...props} defaultValue="テスト" />

defalutValue.story = {
  name: 'デフォルト値'
}
