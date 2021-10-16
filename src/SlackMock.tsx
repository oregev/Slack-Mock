// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages
import { Chat } from './Pages/chat/Chat';
// Componets
import { Header } from './Components/header/Header';
import { Sidebar } from './Components/sidebar/Sidebar';
// Style
import { AppBody } from './Styles/slackMock.style';

export const SlackMock = (): JSX.Element => (
  <div className="SlackMock">
    <Router>
      <Header />
      <AppBody>
        <Sidebar />
        <Switch>
          {/* <Route path="/abute">
          <Home />
        </Route>
        <Route path="/users">
          <Home />
        </Route> */}
          <Route exact path="/">
            <Chat />
          </Route>
        </Switch>
      </AppBody>
    </Router>
  </div>
);
