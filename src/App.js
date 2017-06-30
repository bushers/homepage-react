import React from 'react'
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
import WorkItemPage from './components/WorkItemPage'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import data from './data/workItems'

const App = props => (
  <BrowserRouter>
    <div>
      <Header />
      <Intro />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            <Route path="/work/jcm-portfolio"
                   render={ () => <WorkItemPage data={data[0]} /> } />
            <Route path="/work/shade-luma"
                   render={ () => <WorkItemPage data={data[1]} /> } />
            <Route path="/work/kt-dance"
                   render={ () => <WorkItemPage data={data[2]} /> } />
            <Route component={NotFound} />
          </Switch>
        </div>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App
