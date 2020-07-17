import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import AuthState from './context/auth/authState';
import AlertState from './context/alert/alertState';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <section className='body'>
            <div className='inner-wrapper'>
              <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path='/student_dashboard' component={StudentDashboard} />
                <PrivateRoute exact path='/faculty_dashboard' component={FacultyDashboard} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </section>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
