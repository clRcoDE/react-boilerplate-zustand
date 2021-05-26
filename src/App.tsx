// import from library




// import from local

import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './ui/layout'


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
