import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site'
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Router from './layout/Router'

const Layout = ({ children }) => (
  <Site>
    <Helmet
      title="Forexify"
      meta={[
        { name: 'description', content: 'Hacktiv8 Phase 3 React Challenge App'},
        { name: 'keywords', content: 'forex, react, porfolio, yusuf siregar' },
      ]}
      link={[
        {'rel':'stylesheet', 'href': 'https://use.fontawesome.com/releases/v5.2.0/css/all.css', 'integrity':'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ', 'crossorigin':'anonymous'}
      ]}
    />
    <Header />
    <Content>
      <Router />
    </Content>
    <Footer />
  </Site>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
