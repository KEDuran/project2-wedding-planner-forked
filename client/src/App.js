import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import EventsPage from './pages/Events';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import LogoutPage from './pages/Logout';
import SignUp from './pages/SignUp';
import HomePage from './pages/Home';
import VenuesPage from './pages/Venue';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/events" component={EventsPage} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/venues" component={VenuesPage} />
      <Footer />
    </Router>
  );
}

export default App;
