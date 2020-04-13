import React, { Component } from "react";
import Layout from "./components/Layout/";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";
import { createBrowserHistory } from "history";

// Import Css
import "./Apps.scss";
import "./css/materialdesignicons.min.css";

// Include Routes
import routes from "./routes";
import ReactGA from "react-ga";

const Landing = React.lazy(() => import("./pages/Landing/index"));

const trackingId = "UA-57170681-4";
const history = createBrowserHistory();
ReactGA.initialize(trackingId);

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function withLayout(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    render() {
      return (
        <Layout>
          <WrappedComponent></WrappedComponent>
        </Layout>
      );
    }
  };
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <React.Suspense fallback={<div></div>}>
            <Switch>
              {routes.map((route, idx) => (
                <Route
                  path={route.path}
                  component={withLayout(route.component)}
                  key={idx}
                />
              ))}
              <Route path="/" component={withLayout(Landing)} />
            </Switch>
          </React.Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
