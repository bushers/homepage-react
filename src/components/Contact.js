import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  wrapper: {
    padding: '3em 1em',
    textAlign: 'center'
  }
})

const Contact = props => (
  <div className={css(styles.wrapper)}>
    <h3>Find me at these places</h3>
    <ul></ul>
  </div>
)

export default Contact
