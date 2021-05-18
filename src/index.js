import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './router'
import { SnackbarProvider } from 'notistack'
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button'

const notistackRef = React.createRef()
const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key)
}

ReactDOM.render(
  <SnackbarProvider
    preventDuplicate
    ref={notistackRef}
    maxSnack={3}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    TransitionComponent={Slide}
    action={() => <Button onClick={onClickDismiss()}>x</Button>}
  >
    <AppRoutes />
  </SnackbarProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
