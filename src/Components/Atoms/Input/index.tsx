import React, { FC, useState } from 'react'
import styled from 'styled-components'
import * as color from '../../../cmn/color'

export type InputPresenterProps = {
  className?: string
  defaultValue?: string
  placeholder?: string
  onChange?(value: string): void
}

export type InputContainerProps = InputPresenterProps & {
  presenter: FC<InputPresenterProps>
}

const RootInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 1.6rem;
  border-radius: 5px;
  border: 2px solid ${color.Gray};
  ::focus {
    border-color: rgba(100, 100, 255, .5);
  }
  ::placeholder {
    color: ${color.Gray};
  }
`

const InputPresenter: FC<InputPresenterProps> = ({
  className,
  defaultValue,
  onChange,
  placeholder
}) => {
  return (
    <RootInput
      className={className}
      defaultValue={defaultValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
      placeholder={placeholder}
      type="text"
    />
  )
}

export const InputContainer: FC<InputContainerProps> = ({
  className,
  defaultValue,
  onChange,
  placeholder,
  presenter
}) => {
  const [inputState, setInputState] = useState(defaultValue)
  const handleChange = (value: string) => {
    setInputState(value.trim())
  }
  return presenter({
    className,
    onChange: (value: string) => {
      handleChange(value)
      onChange?.(value)
    },
    placeholder,
    defaultValue: inputState
  })
}

const defaultProps: InputContainerProps = {
  placeholder: '入力してください',
  presenter: InputPresenter
}

export default (props: InputPresenterProps) => {
  return <InputContainer
    {...defaultProps}
    {...props}
  />
}
