import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { HeaderBar } from "./components/headerbar";
import { LoginPage } from "./components/login/login.ui";
interface Props {
   name: string
}

class App extends React.PureComponent<Props> {

  static whyDidYouRender = true

  render() {
    return <React.StrictMode>
     <LoginPage/>
    </React.StrictMode>
  }
}

export default hot(App);