import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import QuoteForm from './components/quotes/QuoteForm';
import QuoteList from './components/quotes/QuoteList';

function App() {
  const linkDetails = useSelector((state) => state.linkDetails.links);

  return (
    <Fragment>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Redirect to={linkDetails.allQuote.url} />
        </Route>
        <Route path={linkDetails.allQuote.url} exact>
          <QuoteList />
        </Route>
        <Route path={linkDetails.addQuote.url} exact>
          <QuoteForm />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
