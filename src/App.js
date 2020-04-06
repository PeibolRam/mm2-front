import React from 'react';
import Home from './pages/Index'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
