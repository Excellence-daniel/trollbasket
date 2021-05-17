import { createSelector, createStructuredSelector } from 'reselect'

const userObject = (state = {}) => state.users

const loading = createSelector(userObject, (userObject) => userObject.loading)

const user = createSelector(userObject, (userObject) => userObject.user)

const errorMessage = createSelector(
  userObject,
  (userObject) => userObject.errorMessage,
)

const selectors = createStructuredSelector({ loading, user, errorMessage })

export default selectors
