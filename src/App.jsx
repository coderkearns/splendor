import { HashRouter as Router, Switch, Route } from "react-router-dom"

import routes from "./routes"

function App() {
  let Routes = []
  for (let route in routes) {
    let ThisRoute = routes[route]
    Routes.push(
      <Route key={route} path={route}>
        <ThisRoute />
      </Route>
    )
  }

  return (
    <Router basename="/">
      {/* <Nav /> */}

      <Switch>{Routes}</Switch>
    </Router>
  )
}

export default App
