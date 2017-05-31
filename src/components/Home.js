import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Home = props => (
  <div className={css(styles.wrapper)}>
    <p>Home</p>
  </div>
)

export default Home

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'grey',
    minHeight: '5em'
  }
})
