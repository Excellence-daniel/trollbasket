export const validateObjectBody = (obj, props) => {
  for (const key in obj) {
    if (!obj[key]) {
      props.enqueueSnackbar(`Please fill in the value for ${key}`, {
        variant: 'warning',
      })
      return false
    }
  }
  return true
}
