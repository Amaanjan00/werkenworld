import Head from '../Components/Head'
import Header from '../Components/Header'
import LeatherHero from '../Components/LeatherHero.jsx'
import ToysHero from '../Components/ToysHero.jsx'
import ToysProducts from '../Components/ToysProducts'
import LeatherProducts from '../Components/LeatherProducts.jsx'
import ScarvesProducts from '../Components/ScarvesProducts.jsx'
import PaperProducts from '../Components/PaperProducts.jsx'
import Footer from '../Components/Footer.jsx'
import Prefooter from '../Components/Prefooter.jsx'
import PaperHero from '../Components/PaperHero.jsx'

function App() {

  return (
    <>
    <Header/>
    <Head/>
    <ToysHero/>
    <ToysProducts/>
    <LeatherHero/>
    <LeatherProducts/>
    <ScarvesProducts/>
    <PaperHero/>
    <PaperProducts/>
    <Prefooter/>
    <Footer/>
    </>
  )
}

export default App
