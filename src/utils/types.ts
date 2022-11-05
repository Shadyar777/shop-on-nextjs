import { ReactElement, ReactNode } from 'react'

import { NextPage } from 'next'

export type NextPageWithLayout<TProps = {}> = NextPage<TProps> & {
  getLayout?: (_page: ReactElement) => ReactNode
}
