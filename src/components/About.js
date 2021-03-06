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
      transitionAppearTimeout={1000}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}>
      <img className={css(styles.pic)} src={profilePic} alt='Nick Bushby profile pic' />
    </CSSTransitionGroup>
    <CSSTransitionGroup
      transitionName='fade-up'
      transitionAppear={true}
      transitionAppearTimeout={1500}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}>
      <div className={css(styles.blurb)}>
        <p>I'm Nick and I'm a front-end web developer based in London.</p>
        <p>After years working in hospitality I sought to gain new skills and change my career path, I developed a passion for code and solving digital dilemmas. I have spent my time developing web development skills including HTML, CSS, JavaScript, React and WordPress and am always learning more. I have taken advantage of great resources, including numerous books and online learning tools to develop the skills needed to create exciting user experiences on the web.</p>
        <p>I have worked on numerous freelance projects, delivering responsive websites based on clients' design and content needs.</p>
        <p>I am eager to advance my skills and am always looking to learn more. I am currently seeking junior positions and freelance work.</p>
      </div>
    </CSSTransitionGroup>
  </div>
)

export default About
