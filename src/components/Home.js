import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { StyleSheet, css } from 'aphrodite'
import jumboImg from '../img/hero-img.jpg'

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
    padding: '4em 1em',
    fontSize: '1.15em',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  list: {
    fontSize: '1.2em'
  }
})

const Home = props => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.jumbo)}>
      <div className={css(styles.overlay)}>
        <CSSTransitionGroup
          transitionName='intro'
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}>
          <div className={css(styles.list)}>
            <h3>I make websites using...</h3>
            <ul>
              <li className={css(styles.listItem)}>HTML</li>
              <li className={css(styles.listItem)}>CSS</li>
              <li className={css(styles.listItem)}>JavaScript</li>
              <li className={css(styles.listItem)}>React</li>
              <li className={css(styles.listItem)}>WordPress</li>
              <li className={css(styles.listItem)}>Responsive Design</li>
            </ul>
          </div>
        </CSSTransitionGroup>
      </div>
    </div>
  </div>
)

export default Home
