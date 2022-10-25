import React, { FC, ReactNode } from 'react'
import { MainHeader } from './MainHeader'
import { MainFooter } from './MainFooter'
import Head from 'next/head'

type MainLayoutPropsType = {
  children: ReactNode
  pageTitle: string
}

const MainLayout: FC<MainLayoutPropsType> = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  )
}

export default MainLayout
