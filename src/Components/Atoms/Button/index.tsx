import React, { FC } from 'react'
import styled from 'styled-components'

const RootButton = styled.button.attrs({ type: 'submit' })`
`

export type ButtonPresenterProps = {
  className?: string
  name: string
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

export type ButtonContainerProps = ButtonPresenterProps & {
  presenter: FC<ButtonPresenterProps>
}

export const ButtonPresenter: FC<ButtonPresenterProps> = ({
  className,
  name,
  onClick,
}) => {
  return (
    <RootButton
      className={className}
      onClick={
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          onClick?.(e)
        }
      }
    >
      {name}
    </RootButton>
  )
}

export const ButtonContainer: FC<ButtonContainerProps> = ({
  className,
  name,
  onClick,
  presenter
}) => {
  return presenter({
    className,
    name,
    onClick
  })
}

const defaultProps: ButtonContainerProps = {
  name: 'ボタン',
  presenter: ButtonPresenter
}

export default (props: ButtonPresenterProps) => {
  return <ButtonContainer
    {...defaultProps}
    {...props}
  />
}
