import React, { FC, useState, useEffect } from 'react'

type StopwatchPresenterProps = {
  count: number,
  flg: boolean,
  start(): void,
  reset(): void
}

export const StopwatchPresenter: FC<StopwatchPresenterProps> = ({
  count,
  flg,
  start,
  reset
}) => {
  return (
    <>
      <div>
        {count}
      </div>
      <div>
        <button onClick={start}>
          {flg ? 'stop' : 'start'}
        </button>
      </div>
      <div>
        <button onClick={reset}>
          reset
        </button>
      </div>
    </>
  )
}

export const StopwatchContainer: FC<any> = ({ outputConsole }) => {
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(false)
  const countup = () => {
    setCount((count: number) => count + 1)
  }
  const handleStart = () => {
    setTimer((timer: boolean) => !timer)
    outputConsole?.(!timer)
  }
  const handleReset = () => {
    setCount(0)
  }
  useEffect(() => {
    if (timer) {
      const timerId = setInterval(() => {
        countup()
      }, 1000)
      return () => clearInterval(timerId)
    }
  }, [timer])
  return (
    <>
      <StopwatchPresenter
        count={count}
        flg={timer}
        start={handleStart}
        reset={handleReset}
      />
    </>
  )
}

export default ({ outputConsole }: any) => <StopwatchContainer outputConsole={outputConsole} />
