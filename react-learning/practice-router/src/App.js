import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import QuoteDetails from './pages/QuoteDetails';
import AddQuote from './pages/AddQuote';
import AllQuotes from './pages/AllQuotes';
import { useState } from 'react';
import ErrorModal from './components/UI/ErrorModal';
import AppContext from './store/AppContext';

function App() {
  const linkDetails = useSelector((state) => state.linkDetails.links);

  const [errorModalVisiable, setErrorModalVisibility] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState(
    'Something went wrong. Please try again later.'
  );
  const [errorModalOkAction, setErrorModalOkAction] = useState();

  const errorModalCloseHandler = () => {
    setErrorModalVisibility(false);
  };

  const displayErrorModal = (message, okayAction) => {
    setErrorModalMessage(message);
    setErrorModalOkAction(okayAction);
    setErrorModalVisibility(true);
  };

  return (
    <AppContext.Provider
      value={{
        displayErrorModal,
      }}
    >
      <Layout>
        {errorModalVisiable && (
          <ErrorModal
            message={errorModalMessage}
            onClose={errorModalCloseHandler}
            onOkPress={errorModalOkAction}
          />
        )}
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
    </AppContext.Provider>
  );
}

export default App;
