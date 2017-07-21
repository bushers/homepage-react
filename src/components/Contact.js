import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import email from '../img/email.png'
import github from '../img/github.png'
import twitter from '../img/twitter.png'
import linkedin from '../img/linkedin.png'

const styles = StyleSheet.create({
  wrapper: {
    padding: '3em 1em',
    textAlign: 'center',
    fontSize: '1.2em'
  },
  list: {
    margin: '1em auto',
    paddingRight: '3em',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    width: 250,
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'left',
    alignItems: 'center',
    color: '#2c3f52',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  icon: {
    width: 45,
    margin: 0
  }
})

const Contact = props => (
  <div className={css(styles.wrapper)}>
    <h3>Find me at these places</h3>
    <ul className={css(styles.list)}>
      <li className={css(styles.item)}>
        <a className={css(styles.link)} href='mailto:nickbushby1@gmail.com'>
          <img className={css(styles.icon)} src={email} alt='email icon' />
          <p>nickbushby1@gmail.com</p>
        </a>
      </li>
      <li className={css(styles.item)}>
        <a className={css(styles.link)} href='https://github.com/bushers'>
          <img className={css(styles.icon)} src={github} alt='github icon' />
          <p>github.com/bushers</p>
        </a>
      </li>
      <li className={css(styles.item)}>
        <a className={css(styles.link)} href='https://twitter.com/nickbushby1'>
          <img className={css(styles.icon)} src={twitter} alt='twitter icon' />
          <p>twitter.com/nickbushby1</p>
        </a>
      </li>
      <li className={css(styles.item)}>
        <a className={css(styles.link)} href='https://linkedin.com/nick.bushby'>
          <img className={css(styles.icon)} src={linkedin} alt='linkedin icon' />
          <p>linkedin.com/nick.bushby</p>
        </a>
      </li>
    </ul>
  </div>
)

export default Contact
