import React from 'react'
import WorkItem from './WorkItem'
import { StyleSheet, css } from 'aphrodite'
import workItems from '../data/workItems'

const Work = props => (
  <div className={css(styles.wrapper)}>
    {workItems.map(item => (
      <WorkItem
        key={item.title}
        imgSrc={item.imgSrc}
        desc={item.description}
        bg={item.bgColor}
      />
    ))}
  </div>
)

export default Work

const styles = StyleSheet.create({
  wrapper: {
    padding: '2em 0'
  }
})
