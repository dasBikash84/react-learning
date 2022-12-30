import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import QuoteDetails from './components/quotes/QuoteDetails';
import QuoteForm from './components/quotes/QuoteForm';
import QuoteList from './components/quotes/QuoteList';

function App() {
  const linkDetails = useSelector((state) => state.linkDetails.links);

  return (
    <Fragment>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Redirect to={linkDetails.nav.allQuote.url} />
        </Route>
        <Route path={linkDetails.nav.allQuote.url} exact>
          <QuoteList />
        </Route>
        <Route path={linkDetails.nav.addQuote.url} exact>
          <QuoteForm />
        </Route>
        <Route path={linkDetails.quoteDetails.url} exact>
          <QuoteDetails />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
