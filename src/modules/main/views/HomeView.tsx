import React from 'react'
import { selectAuthState, setAuthState } from '@/src/store/authState'
import { Box } from '@mui/material'
import { fetchUsers } from '@/src/modules/main/slice/jsonSlice'
import { useAppDispatch, useAppSelector } from '@/src/store/hooks'

const HomeView = () => {
  const authState = useAppSelector(selectAuthState)
  const dispatch = useAppDispatch()
  return (
    <Box margin={'50px 0'}>
      <div>{authState ? 'Logged in' : 'Not Logged In'}</div>
      <button
        onClick={() => {
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
          dispatch(fetchUsers())
        }}
      >
        {authState ? 'Logout' : 'LogIn'}
      </button>
    </Box>
  )
}

export default HomeView
