import React, { Suspense, useState, useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';
import useWindowSize from './hooks/useWindowSize';
import GlobalContext from './context/global-context';
import LanguageContext from './context/language-context';
import { playlists, equipment, reviews, english, spanish } from './db';
import Home from './pages/HomePage';
import Loading from './components/Loading';
import TheNavbar from './components/TheNavbar';
import MobileNav from './components/MobileNav';
import TheFooter from './components/TheFooter';

const NoMatch = React.lazy(() => import('./pages/404Page'));

const App = () => {
  const size = useWindowSize();
  const [isVisible, setIsVisible] = useState(true);
  const [language, setLanguage] = useState('en');
  const [languageContent, setLanguageContent] = useState(english);

  useEffect(() => {
    language === 'en'
      ? setLanguageContent(english)
      : setLanguageContent(spanish);
  }, [language]);

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
        <LanguageContext.Provider
          value={{ language, setLanguage, languageContent }}
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
        </LanguageContext.Provider>
      </GlobalContext.Provider>
    </Suspense>
  );
};

export default App;
