import { NextPageWithLayout } from '../utils/types'
import HomeView from '@/src/modules/main/views/HomeView'
import MainLayout from '@/src/modules/common/layout/MainLayout'

const Home: NextPageWithLayout = () => <HomeView />

Home.getLayout = function getLayout(page) {
  return <MainLayout pageTitle='home'>{page}</MainLayout>
}

export default Home
