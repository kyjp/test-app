import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Input from '../../Atoms/Input/index'
import Button from '../../Atoms/Button/index'
import * as color from '../../../cmn/color'

const RootForm = styled.form`
`

const ErrorTxt = styled.p`
  color: ${color.Red};
  font-size: 1.6rem;
`

export type FormPresenterProps = {
  className?: string
  onChange?(value: string): void
  defaultValue?: string
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,
  onSubmit?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,
  error: number
}

export type FormContainerProps = FormPresenterProps & {
  presenter: FC<FormPresenterProps>
}

export const FormPresenter: FC<FormPresenterProps> = ({
  className,
  onChange,
  defaultValue,
  onClick,
  error
}) => {
  return (
    <RootForm className={className} action="post">
      {error ?
        <ErrorTxt >
          6文字以上８文字以下で入力してください
        </ErrorTxt> : ''}
      <Input defaultValue={defaultValue} onChange={onChange} />
      <Button name="送信" onClick={onClick} />
    </RootForm >
  )
}

export const FormContainer: FC<FormContainerProps> = ({
  className,
  defaultValue,
  presenter,
  onSubmit
}) => {
  const [keyword, setKeyword] = useState(defaultValue)
  const [error, setError] = useState(0)
  const handleChange = (value: string) => {
    setKeyword(value.trim())
  }
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const kwLength = keyword == null ? 0 : keyword.length
    setError(5 < kwLength && kwLength < 9 ? 0 : 1)
    onSubmit?.(e)
    if (!error) e.preventDefault()
  }
  return presenter({
    className,
    onChange: (value: string) => handleChange(value),
    defaultValue,
    onClick: (e) => handleSubmit(e),
    error
  })
}

const defaultProps: FormContainerProps = {
  error: 0,
  presenter: FormPresenter
}

export default (props: FormPresenterProps) => {
  return <FormContainer
    {...defaultProps}
    {...props}
  />
}
