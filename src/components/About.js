import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import profilePic from '../img/profile-sm.jpg'
import { CSSTransitionGroup } from 'react-transition-group'

const styles = StyleSheet.create({
  wrapper: {
    padding: '3em 1em'
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

const About = props => (
  <div className={css(styles.wrapper)}>
    <CSSTransitionGroup
      transitionName='fade-in'
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}>
      <img className={css(styles.pic)} src={profilePic} alt='Nick Bushby profile pic' />
    </CSSTransitionGroup>
    <div className={css(styles.blurb)}>
      <p>I'm Nick and I'm a front-end web developer currently based in Leeds.</p>
      <p>After years working in hospitality I sought to gain new skills and change my career path. I have recently developed a passion for code and solving digital dilemmas. I have spent my free time developing my skills in HTML, CSS and JavaScript. I have taken advantage of great resources, including numerous books and online learning tools to develop the skills needed to create exciting user experiences on the web.</p>
      <p>I am eager to advance my skills and am always looking to learn more. I am currently actively seeking junior  positions and freelance work.</p>
    </div>
  </div>
)

export default About
