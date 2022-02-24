import { HashRouter as Switch, Route } from 'react-router-dom'
import React from 'react'

import { routes } from './routes'
import '../src/assets/styles/styles.scss'
import { AppHeader } from './cmps/AppHeader'


export const App = () => {

  return (
    <main className="app-main">
      <AppHeader />
      <Switch>
        {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      </Switch>
    </main>
  )

}