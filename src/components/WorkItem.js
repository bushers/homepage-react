import React from 'react'

const WorkItem = props => (
  <div className='work-item-tile' style={{backgroundColor: props.bg}}>
    <img className='work-item-img'
         src={props.imgSrc}
         alt={props.title} />
    <div className='work-item-overlay'>
      <p>{props.desc}</p>
    </div>
  </div>
)

export default WorkItem
