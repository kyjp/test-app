import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Form from '.'
import userEvent from '@testing-library/user-event'

afterEach(() => cleanup())

describe('Render the Form', () => {
  const props = {
    error: 0,
    onSubmit: e => {
      e.preventDefault()
    }
  }
  it('Should render Form ErrorCheck 5', () => {
    const typeText = '春はあけぼ'
    render(<Form {...props} />)
    const inputValue = screen.getByPlaceholderText('入力してください')
    userEvent.type(inputValue, typeText)
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByText('6文字以上８文字以下で入力してください')).toBeTruthy()
  })
  it('Should render Form ErrorCheck 6', () => {
    const typeText = '春はあけぼの'
    render(<Form {...props} />)
    const inputValue = screen.getByPlaceholderText('入力してください')
    userEvent.type(inputValue, typeText)
    userEvent.click(screen.getByRole('button'))
    expect(screen.queryByText('6文字以上８文字以下で入力してください')).toBeNull()
  })
  it('Should render Form ErrorCheck 8', () => {
    const typeText = '春はあけぼの。や'
    render(<Form {...props} />)
    const inputValue = screen.getByPlaceholderText('入力してください')
    userEvent.type(inputValue, typeText)
    userEvent.click(screen.getByRole('button'))
    expect(screen.queryByText('6文字以上８文字以下で入力してください')).toBeNull()
  })
  it('Should render Form ErrorCheck 9', () => {
    const typeText = '春はあけぼの。やう'
    render(<Form {...props} />)
    const inputValue = screen.getByPlaceholderText('入力してください')
    userEvent.type(inputValue, typeText)
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByText('6文字以上８文字以下で入力してください')).toBeTruthy()
  })
})
