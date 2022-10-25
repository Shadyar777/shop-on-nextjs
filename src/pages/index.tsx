import { NextPageWithLayout } from '../utils/types'
import HomeView from '../modules/main/views/HomeView'
import MainLayout from '../modules/common/layout/MainLayout'

const Home: NextPageWithLayout = () => <HomeView />

Home.getLayout = function getLayout(page) {
  return <MainLayout pageTitle='home'>{page}</MainLayout>
}

export default Home
