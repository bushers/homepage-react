import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  wrapper: {
    'padding': '2em 1em'
  }
})

const WorkItemPage = props => (
  <div className={css(styles.wrapper)}>
    <h3>{props.data.title}</h3>
  </div>
)

export default WorkItemPage
