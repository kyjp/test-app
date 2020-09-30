import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DescriptionPage from './Components/Pages/DescriptionPage/index'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact title="トップ" component={DescriptionPage}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
