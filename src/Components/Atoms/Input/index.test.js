import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Input from '.'
import userEvent from '@testing-library/user-event'

afterEach(() => cleanup())

describe('Render the Input', () => {
  it('Should render Input', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
  it('Should render Input defaultValue', () => {
    const defaultValue = '春はあけぼの。やうやう白くなりゆく山際、少し明かりて、紫だちたる雲の細くたなびきたる。'
    render(<Input defaultValue={defaultValue} />)
    const inputValue = screen.getByPlaceholderText('入力してください')
    expect(inputValue.value).toBe(defaultValue)
  })
  it('Should render Input onChange value', () => {
    render(<Input />)
    const typeText = '春はあけぼの。やうやう白くなりゆく山際、少し明かりて、紫だちたる雲の細くたなびきたる。'
    const inputValue = screen.getByPlaceholderText('入力してください')
    userEvent.type(inputValue, typeText)
    expect(inputValue.value).toBe(typeText)
  })
})
