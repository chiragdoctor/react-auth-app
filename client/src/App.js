import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <section className='body'>
        <div className='inner-wrapper'>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </section>
    </Router>
  );
};

export default App;
