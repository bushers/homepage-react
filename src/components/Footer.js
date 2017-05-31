import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Footer = props => (
  <div className={css(styles.wrapper)}>
    <p>My Footer</p>
  </div>
)

export default Footer

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red'
  }
})
