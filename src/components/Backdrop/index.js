import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

export const BackdropComponent = (props) => {
  return (
    <Backdrop
      open={props.open}
      style={{ backgroundColor: 'rgb(9 69 86 / 25%)' }}
    >
      <CircularProgress color="white" />
    </Backdrop>
  )
}
