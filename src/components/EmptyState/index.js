import React from 'react'
import EmptySvg from '../../assets/svgs/empty.svg'
import './index.scss'

const EmptyState = (props) => {
  return (
    <div className="empty-component">
      <img src={EmptySvg} alt="empty-svg" />
      <h5>{props.text}</h5>
    </div>
  )
}

export default EmptyState
