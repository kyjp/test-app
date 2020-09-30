import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Stopwatch from '.'
import userEvent from '@testing-library/user-event'

afterEach(() => cleanup())

describe('Render the Stopwatch', () => {
  it('Should render Stopwatch start flgCheck', () => {
    const outputConsole = jest.fn().mockImplementation((flg) => flg)
    render(<Stopwatch outputConsole={outputConsole} />)
    expect(screen.getByText('start')).toBeTruthy()
    userEvent.click(screen.getAllByRole('button')[0])
    expect(outputConsole).toHaveBeenCalledTimes(1)
    expect(outputConsole.mock.results[0].value).toEqual(true)
  })
  it('Should render Stopwatch stop flgCheck', () => {
    const outputConsole = jest.fn().mockImplementation((flg) => flg)
    render(<Stopwatch outputConsole={outputConsole} />)
    userEvent.click(screen.getAllByRole('button')[0])
    expect(screen.getByText('stop')).toBeTruthy()
    userEvent.click(screen.getAllByRole('button')[0])
    expect(outputConsole).toHaveBeenCalledTimes(2)
    expect(outputConsole.mock.results[1].value).toEqual(false)
  })
  it('Should render Stopwatch 5 count check', async () => {
    const outputConsole = jest.fn()
    render(<Stopwatch outputConsole={outputConsole} />)
    expect(screen.getByText('0')).toBeTruthy()
    userEvent.click(screen.getAllByRole('button')[0])
    await setTimeout(() => { }, 3000)
    userEvent.click(screen.getAllByRole('button')[0])
    await setTimeout(() => { }, 1000)
    expect(screen.findByText('5')).toBeTruthy()
  })
  it('Should render Stopwatch stop from reset check', async () => {
    const outputConsole = jest.fn()
    render(<Stopwatch outputConsole={outputConsole} />)
    expect(screen.getByText('0')).toBeTruthy()
    userEvent.click(screen.getAllByRole('button')[0])
    await setTimeout(() => { }, 3000)
    userEvent.click(screen.getAllByRole('button')[0])
    userEvent.click(screen.getAllByRole('button')[1])
    await setTimeout(() => { }, 1000)
    expect(screen.findByText('0')).toBeTruthy()
  })
  it('Should render Stopwatch start from reset check', async () => {
    const outputConsole = jest.fn()
    render(<Stopwatch outputConsole={outputConsole} />)
    userEvent.click(screen.getAllByRole('button')[0])
    await setTimeout(() => { }, 3000)
    userEvent.click(screen.getAllByRole('button')[1])
    expect(screen.findByText('0')).toBeTruthy()
  })

  it('Should render Stopwatch start from reset count check', async () => {
    const outputConsole = jest.fn()
    render(<Stopwatch outputConsole={outputConsole} />)
    userEvent.click(screen.getAllByRole('button')[0])
    await setTimeout(() => { }, 3000)
    userEvent.click(screen.getAllByRole('button')[1])
    await setTimeout(() => { }, 1000)
    expect(screen.findByText('1')).toBeTruthy()
  })
})
