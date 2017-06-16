import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Intro from './components/Intro'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Intro />
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
