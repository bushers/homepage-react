import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  intro: {
    backgroundColor: '#e1e8f0',
    position: 'relative',
    padding: '1em',
    '@media (min-width: 1400px)': {
      padding: '2em 1em'
    },
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
  textContainer: {
    maxWidth: 620,
    margin: 'auto'
  },
  text: {
    margin: 0
  }
})

const Intro = props => (
  <div className={css(styles.intro)}>
    <CSSTransitionGroup
      transitionName='title'
      transitionAppear={true}
      transitionAppearTimeout={1500}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}>
      <div className={css(styles.textContainer)}>
        <p className={css(styles.text)}>Hi there, I'm</p>
        <h1>Nick Bushby</h1>
        <p className={css(styles.text)}>Front-end Developer</p>
      </div>
    </CSSTransitionGroup>
  </div>
)

export default Intro
