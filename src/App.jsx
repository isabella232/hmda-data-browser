import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import NotFound from './common/NotFound'
import Footer from './Footer'
import Geography from './geo/Geography.jsx'
import Beta from './Beta.jsx'
import { betaLinks, defaultLinks } from './links'
import { fetchEnvConfig, findObjIndex } from './configUtils'

import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.isBeta = !!window.location.host.match('beta')
    this.state = { links: this.isBeta ? betaLinks : defaultLinks }
  }

  componentDidMount() {
    if(this.isBeta) return
    fetchEnvConfig()
      .then(config => this.updateFilingLink(config))
      .catch(() => null)
  }

  updateFilingLink(config) {
    const idx = findObjIndex(this.state.links, 'name', 'Filing')
    if (idx > -1) {
      const links = [...this.state.links]
      links[idx].href = `/filing/${config.defaultPeriod}/`
      this.setState({ links })
    }
  }

  render() {
    return (
      <>
        <Header pathname={window.location.pathname} links={this.state.links} />
        {this.isBeta ? <Beta /> : null}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/data/:year?' component={Geography} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </>
    )
  }
}
export default App
