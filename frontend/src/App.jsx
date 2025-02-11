import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import AddSection from './pages/AddSection'
import Footer from './components/Footer'
import Container from './components/ui/Container'

const App = () => {
  return (
   <>
    <Container>
      <Header />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/add' element={<AddSection />}/>
        </Routes>
      <Footer />
    </Container>
   </> 
  )
}

export default App
