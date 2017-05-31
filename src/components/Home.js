import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import jumboImg from '../img/hero-img.jpg'

const Home = props => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.intro)}>
      <p>Hi there, Im</p>
      <h1>Nick Bushby</h1>
      <p>Front-end Developer</p>
    </div>
    <div className={css(styles.jumbo)}>
      <div className={css(styles.overlay)}>
        <h3>I make websites using...</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>WordPress</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Home

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'grey',
    minHeight: '5em'
  },

  intro: {
    backgroundColor: '#e1e8f0',
    position: 'relative',
    padding: '1em',
    textAlign: 'center',
    fontFamily: '"Patua One", cursive',
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

  jumbo: {
    backgroundImage: `url(${jumboImg})`,
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    textAlign: 'center',
    color: '#fffbfe'
  },

  overlay: {
    width: '100%',
    padding: '2em 1em',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
})
