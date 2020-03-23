import React, { Component } from "react";
import Layout from "./components/Layout/";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
  Redirect
} from "react-router-dom";

// Import Css
import "./Apps.scss";
import "./css/materialdesignicons.min.css";

// Include Routes
import routes from "./routes";

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
        <Router>
          <React.Suspense fallback={<div></div>}>
            <Switch>
              {routes.map((route, idx) => (
                <Route
                  path={route.path}
                  component={withLayout(route.component)}
                  key={idx}
                />
              ))}
              <Route exact path="/" render={() => <Redirect to="/index" />} />
            </Switch>
          </React.Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
