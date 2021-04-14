import './App.css';
import Home from './views/Home';
import { Box } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Welcome from './views/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Box className="App">
        <Switch>
          <Route path={["/search/:search", "/search/"]} >
            < Home />
          </Route>
          <Route path="">
            <Welcome />
          </Route>
          <Redirect to="/search/"/>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
