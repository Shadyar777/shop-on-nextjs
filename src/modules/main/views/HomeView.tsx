import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthState, setAuthState } from '@/src/store/authState'
import { Box } from '@mui/material'

const HomeView = () => {
  const authState = useSelector(selectAuthState)
  const dispatch = useDispatch()
  return (
    <Box margin={'50px 0'}>
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
    </Box>
  )
}

export default HomeView
