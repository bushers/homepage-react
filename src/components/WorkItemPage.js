import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import { StyleSheet, css } from 'aphrodite'
import arrow from '../img/back-arrow.png'

const styles = StyleSheet.create({
  wrapper: {
    'padding': '5em 1em',
    'margin': 'auto',
    'textAlign': 'center'
  },
  logo: {
    'maxWidth': '300px',
    'margin': 'auto'
  },
  title: {
    'margin': '0.5em auto 0 auto',
    'fontSize': '1.6em'
  },
  link: {
    'color': '#2c3f52',
    'fontWeight': 'bold',
    fontSize: '1.2em'
  },
  itemContainer: {
    '@media (min-width: 992px)': {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  screen: {
    margin: '4em auto',
    borderTop: '3px solid #2c3f52',
   'borderRadius': '3px',
    boxShadow: '0 2px 2px rgba(0,0,0,0.1)',
    '@media (min-width: 992px)': {
      margin: '4em 1.5em'
    }
  },
  blurb: {
    'backgroundColor': '#fff',
    'borderTop': '3px solid #2c3f52',
    'borderRadius': '3px',
    'boxShadow': '0 2px 2px rgba(0,0,0,0.1)',
    'padding': '5px',
    'textAlign': 'left',
    'margin': '2em auto',
    'maxWidth': '500px',
    '@media (min-width: 992px)': {
      margin: '0 1.5em'
    }
  },
  backLink: {
    display: 'inline-block'
  },
  arrow: {
    width: '40px'
  }
})

const WorkItemPage = props => (
  <div className={css(styles.wrapper)}>
    <h3 className={css(styles.title)}>{props.data.title}</h3>
    <a className={css(styles.link)}
       href={`http://${props.data.siteUrl}`}>Visit site</a>
    <CSSTransitionGroup
     transitionName='fade-in'
     transitionAppear={true}
     transitionAppearTimeout={500}
     transitionEnterTimeout={600}
     transitionLeaveTimeout={200}>
      <div className={css(styles.itemContainer)}>
        <img className={css(styles.screen)}
           src={props.data.siteScreen}
           alt='site screen shot' />
        <div className={css(styles.blurb)}>
          <p>{props.data.blurb}</p>
        </div>
      </div>
    </CSSTransitionGroup>
    <NavLink className={css(styles.backLink)} to='/work'>
      <img className={css(styles.arrow)}
           src={arrow}
           alt='back arrow' />
      <p>Go Back</p>
    </NavLink>
  </div>
)

export default WorkItemPage

WorkItemPage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    siteScreen: PropTypes.string,
    siteUrl: PropTypes.string,
    blurb: PropTypes.string
  })
}
