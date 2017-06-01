import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import jumboImg from '../img/hero-img.jpg'

const Home = props => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.jumbo)}>
      <div className={css(styles.overlay)}>
        <h3>I make websites using...</h3>
        <ul>
          <li className={css(styles.listItem)}>HTML</li>
          <li className={css(styles.listItem)}>CSS</li>
          <li className={css(styles.listItem)}>JavaScript</li>
          <li className={css(styles.listItem)}>WordPress</li>
          <li className={css(styles.listItem)}>Responsive Design</li>
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
    padding: '3em 1em',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },

  listItem: {
    margin: '0.25em 0'
  }
})
