
import React from 'react'
// import PropTypes from 'prop-types'

import scss from './Layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={scss.Layout}>{children}</div>
  )
}

Layout.propTypes = {}

export default Layout