import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Intro = props => (
  <div className={css(styles.intro)}>
    <p>Hi there, Im</p>
    <h1>Nick Bushby</h1>
    <p>Front-end Developer</p>
  </div>
)

export default Intro

const styles = StyleSheet.create({
  intro: {
    backgroundColor: '#e1e8f0',
    position: 'relative',
    padding: '2em 1em',
    textAlign: 'center',
    fontFamily: '"Patua One", sans-serif',
    fontSize: '1.2em',
    ':after': {
      content: '""',
      position: 'absolute',
      bottom: '-1.25em',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '0',
      height: '0',
      borderTop: '1.25em solid #e1e8f0',
      borderLeft: '1.25em solid transparent',
      borderRight: '1.25em solid transparent',
      zIndex: '2'
    }
  },
})