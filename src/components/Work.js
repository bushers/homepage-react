import React from 'react'
import { NavLink } from 'react-router-dom'
import WorkItem from './WorkItem'
import { StyleSheet, css } from 'aphrodite'
import workItems from '../data/workItems'

const styles = StyleSheet.create({

})

const Work = ({match}) => (
  <div className={css(styles.wrapper)}>
    {workItems.map(item => (
      <NavLink key={item.title} to={`${match.url}/${item.path}`}>
        <WorkItem
          imgSrc={item.imgSrc}
          desc={item.description}
          bg={item.bgColor}
        />
      </NavLink>
    ))}
  </div>
)

export default Work
