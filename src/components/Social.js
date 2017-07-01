import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import email from '../img/email.png'
import github from '../img/github.png'
import twitter from '../img/twitter.png'
import linkedin from '../img/linkedin.png'

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center'
  },
  item: {
    width: 32,
    height: 32,
    margin: '0.5em 0.25em'
  }
})

const Social = props => (
  <ul className={css(styles.list)}>
    <li className={css(styles.item)}><a href='mailto:nickbushby1@gmail.com'><img src={email} alt='email icon' /></a></li>
    <li className={css(styles.item)}><a href='https://github.com/bushers'><img src={github} alt='github icon' /></a></li>
    <li className={css(styles.item)}><a href='https://twitter.com/nickbushby1'><img src={twitter} alt='twitter icon' /></a></li>
    <li className={css(styles.item)}><a href='https://linkedin.com/nick.bushby'><img src={linkedin} alt='linkedin icon' /></a></li>
  </ul>
)

export default Social
