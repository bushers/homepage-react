import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

const Header = props => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.brand)}>
      <NavLink exact to ='/'>
        <h3>Nick Bushby</h3>
        <p>Front-end Developer</p>
      </NavLink>
    </div>
    <ul className={css(styles.nav)}>
      <li className={css(styles.navItem)}><NavLink to="/about">About</NavLink></li>
      <li className={css(styles.navItem)}><NavLink to="/work">Work</NavLink></li>
      <li className={css(styles.navItem)}><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </div>
)

export default Header

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#2c3f52',
    color: '#fffbfe',
    padding: '1em',
    position: 'relative',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    fontWeight: '300',
    fontFamily: '"Patua One", sans-serif'
  },

  brand: {
    fontSize: '0.9em'
  },

  nav: {
    display: 'flex',
    flexFlow: 'row nowrap',
    marginLeft: 'auto'
  },

  navItem: {
    margin: '0 0 0 1em'
  }
})
