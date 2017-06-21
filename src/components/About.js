import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import profilePic from '../img/profile-sm.jpg'
import { CSSTransitionGroup } from 'react-transition-group'

const About = props => (
  <div className={css(styles.wrapper)}>
    <CSSTransitionGroup
      transitionName='profile-pic'
      transitionAppear={true}
      transitionAppearTimeout={800}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}>
      <img className={css(styles.pic)} src={profilePic} alt='Nick Bushby profile pic' />
    </CSSTransitionGroup>
    <div className={css(styles.blurb)}>
      <p>I'm Nick and I'm a front-end developer based in Leeds.</p>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
      <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
    </div>
  </div>
)

export default About

const styles = StyleSheet.create({
  wrapper: {
    padding: '2em 1em'
  },

  pic: {
    borderRadius: '50%',
    width: '140px',
    margin: '2em auto'
  },

  blurb: {
    maxWidth: 500,
    margin: '1em auto'
  }
})
