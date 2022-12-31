import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import QuoteDetails from './pages/QuoteDetails';
import AddQuote from './pages/AddQuote';
import AllQuotes from './pages/AllQuotes';

function App() {
  const linkDetails = useSelector((state) => state.linkDetails.links);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to={linkDetails.nav.allQuote.url} />
        </Route>
        <Route path={linkDetails.nav.allQuote.url} exact>
          <AllQuotes />
        </Route>
        <Route path={linkDetails.nav.addQuote.url} exact>
          <AddQuote />
        </Route>
        <Route path={linkDetails.quoteDetails.url}>
          <QuoteDetails />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
