import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, StyledEngineProvider } from '@material-ui/core';

// routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// defaultTheme
import theme from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';
import Routes from './routes';

//-----------------------|| APP ||-----------------------//

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Router>
            <Switch>
              <Route path="/" component={Routes} />
            </Switch>
          </Router>
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
