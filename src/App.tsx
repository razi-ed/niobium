import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { 
  BrowserRouter as Router, 
  Route } from "react-router-dom";

import * as Routes from "./routes/routes.json"

interface Props {
   name: string
}

class App extends React.PureComponent<Props> {

  static whyDidYouRender = true

  render() {
    return (
    <Router>
      <React.StrictMode>
        {
          Routes.routes.map(item => {
            return(
              <Route
                path={item.route_path}
                render={() => <div>Hello world</div>}
              />
            )
          })
        }
      </React.StrictMode>
    </Router>
    )
  }
}

export default hot(App);