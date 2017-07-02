import React from 'react'
import { NavLink } from 'react-router-dom'
import WorkItem from './WorkItem'
import workItems from '../data/workItems'

const Work = ({match}) => (
  <div>
    {workItems.map(item => (
      <NavLink key={item.title} to={`${match.url}/${item.path}`}>
        <WorkItem
          imgSrc={item.imgSrc}
          imgAlt={item.title}
          desc={item.description}
          bg={item.bgColor}
        />
      </NavLink>
    ))}
  </div>
)

export default Work
