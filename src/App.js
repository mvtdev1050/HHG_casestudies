import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Counter from './pages/counter/counter';
import EmployeeTable from './pages/table/table';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <div className="page">
              <Switch>
                  <Route exact path="/" component={Counter} />
                  <Route exact path="/table" component={EmployeeTable} />                  
              </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
