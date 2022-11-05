import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthState, setAuthState } from '@/src/store/authState'

const HomeView = () => {
  const authState = useSelector(selectAuthState)
  const dispatch = useDispatch()
  return (
    <div>
      <div>{authState ? 'Logged in' : 'Not Logged In'}</div>
      <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? 'Logout' : 'LogIn'}
      </button>
    </div>
  )
}

export default HomeView
