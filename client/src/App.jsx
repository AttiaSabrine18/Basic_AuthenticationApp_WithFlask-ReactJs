import './App.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegistrePage from './pages/RegistrePage'

function App() {
  

  return (

       <div className="container">
        
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegistrePage />} />

        </Routes>
        </BrowserRouter>
       </div>
    
    
   
  )
}

export default App
