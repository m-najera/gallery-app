import './App.css';
import Home from './views/Home';
import { Box } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import About from './views/About';

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/about/">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/404">
            <div>
              <h2>404 - Page Not Found</h2>
            </div>
          </Route>
          <Redirect to="/404/" />
        </Switch>
      </BrowserRouter>
    </Box>
  );
}

export default App;
