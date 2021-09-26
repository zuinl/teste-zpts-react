import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;