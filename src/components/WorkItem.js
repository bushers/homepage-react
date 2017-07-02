import React from 'react'
import PropTypes from 'prop-types'

const WorkItem = props => (
  <div className='work-item-tile' style={{backgroundColor: props.bg}}>
    <img className='work-item-img'
         src={props.imgSrc}
         alt={props.imgAlt} />
    <div className='work-item-overlay'>
      <p>{props.desc}</p>
    </div>
  </div>
)

export default WorkItem

WorkItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}
