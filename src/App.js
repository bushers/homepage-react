import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import { StyleSheet, css } from 'aphrodite'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={css(styles.wrapper)}>
          <Header />
          <div className={css(styles.mainContentContainer)}>
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

const styles = StyleSheet.create({
  wrapper: {
  },

  mainContentContainer: {

  }
})
