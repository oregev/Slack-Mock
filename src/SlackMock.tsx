// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './Components/header/Header';
// Componets
import { Home } from './Pages/home/Home';

export const SlackMock = (): JSX.Element => (
  <div className="SlackMock">
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/abute">
          <Home />
        </Route>
        <Route path="/users">
          <Home />
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
);
