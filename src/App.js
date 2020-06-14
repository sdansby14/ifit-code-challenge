import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';

import Home from './pages/HomePage';
import Loading from './components/Loading';

const NoMatch = React.lazy(() => import('./pages/404Page'));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
