import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

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
    'fontSize': '1.4em'
  },
  link: {
    'fontSize': '1.2em',
    'color': '#2c3f52',
    'fontWeight': 'bold',
  },
  blurb: {
    'backgroundColor': '#f5f5f5',
    'borderRadius': '10px',
    'boxShadow': '0 2px 5px',
    'padding': '5px',
    'textAlign': 'left',
    'margin': '1em auto',
    'maxWidth': '500px'
  }
})

const WorkItemPage = props => (
  <div className={css(styles.wrapper)}>
    <img className={css(styles.logo)} src={props.data.imgSrc} alt={props.data.title} />
    <h3 className={css(styles.title)}>{props.data.title}</h3>
    <a className={css(styles.link)} href={`http://${props.data.siteUrl}`}>Visit site</a>
    <div className={css(styles.blurb)}>
      <p>{props.data.blurb}</p>
    </div>
  </div>
)

export default WorkItemPage

WorkItemPage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    imgSrc: PropTypes.string,
    siteUrl: PropTypes.string,
    blurb: PropTypes.string
  })
}
