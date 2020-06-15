import React, { Suspense, useState } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';
import useWindowSize from './hooks/useWindowSize';
import GlobalContext from './context/global-context';
import { playlists, equipment, reviews } from './db';
import Home from './pages/HomePage';
import Loading from './components/Loading';
import TheNavbar from './components/TheNavbar';
import MobileNav from './components/MobileNav';
import TheFooter from './components/TheFooter';

const NoMatch = React.lazy(() => import('./pages/404Page'));

const App = () => {
  const size = useWindowSize();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Suspense fallback={<Loading />}>
      <GlobalContext.Provider
        value={{
          playlists,
          equipment,
          reviews,
          setIsVisible,
        }}
      >
        {size.width > 1024 ? (
          <TheNavbar isVisible={isVisible} />
        ) : (
          <MobileNav />
        )}
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        <TheFooter />
      </GlobalContext.Provider>
    </Suspense>
  );
};

export default App;
