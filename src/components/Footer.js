import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Social from './Social'

const date = new Date()
const year = date.getFullYear()
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#2c3f52',
    color: '#fffbfe',
    padding: '1em',
    '@media (min-width: 1400px)': {
      padding: '2em 1em'
    },
    position: 'relative',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    fontWeight: '300',
    fontFamily: '"Patua One", sans-serif'
  },
  copyright: {
    fontSize: '0.8em'
  }
})

const Footer = props => (
  <div className={css(styles.wrapper)}>
    <Social />
    <p className={css(styles.copyright)}>Copyright &copy; {year}</p>
  </div>
)

export default Footer
