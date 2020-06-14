import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';
import useWindowSize from './hooks/useWindowSize';

import Home from './pages/HomePage';
import Loading from './components/Loading';
import TheNavbar from './components/TheNavbar';
import TheFooter from './components/TheFooter';

const NoMatch = React.lazy(() => import('./pages/404Page'));

const App = () => {
  const size = useWindowSize();

  return (
    <Suspense fallback={<Loading />}>
      {size.width > 1024 ? <TheNavbar /> : null}
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      <TheFooter />
    </Suspense>
  );
};

export default App;
