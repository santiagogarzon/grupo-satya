import React, { Component } from 'react';
import Layout from './components/Layout/';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';

// Import Css
import './Apps.scss';
import './css/materialdesignicons.min.css';

// Include Routes 
import routes from './routes';

// Root Include
const Root = React.lazy(() => import('./pages/Home/indexRoot'));
const PageComingSoon = React.lazy(() => import('./pages/PageComingSoon'));
const PageContactDetail = React.lazy(() => import('./pages/PageContactDetail'));
const PageCoverLogin = React.lazy(() => import('./pages/PageCoverLogin'));
const PageCoverRePassword = React.lazy(() => import('./pages/PageCoverRePassword'));
const PageCoverSignup = React.lazy(() => import('./pages/PageCoverSignup'));
const PageError = React.lazy(() => import('./pages/PageError'));
const PageLogin = React.lazy(() => import('./pages/PageLogin'));
const PageMaintenance = React.lazy(() => import('./pages/PageMaintenance'));
const PageRecoveryPassword = React.lazy(() => import('./pages/PageRecoveryPassword'));
const PageSignup = React.lazy(() => import('./pages/PageSignup'));

function withLayout(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {  
    render() {
      return <Layout>
        <WrappedComponent></WrappedComponent>
      </Layout>
    }
  };
}

class App extends Component {

  render() {

    return (
      <React.Fragment>  
      <Router>
          <React.Suspense fallback={<div></div>}>
            <Switch>
            {routes.map((route, idx) =>
                <Route path={route.path} component={withLayout(route.component)} key={idx} />
            )}
            <Route path="/page-comingsoon" component={PageComingSoon} />
            <Route path="/page-contact-detail" component={PageContactDetail} />
            <Route path="/page-cover-login" component={PageCoverLogin} />
            <Route path="/page-cover-re-password" component={PageCoverRePassword} />
            <Route path="/page-cover-signup" component={PageCoverSignup} />
            <Route path="/page-error" component={PageError} />
            <Route path="/page-login" component={PageLogin} />
            <Route path="/page-maintenance" component={PageMaintenance} />
            <Route path="/page-recovery-password" component={PageRecoveryPassword} />
            <Route path="/page-signup" component={PageSignup} />
            <Route path="/" component={Root} />
            </Switch>
          </React.Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);