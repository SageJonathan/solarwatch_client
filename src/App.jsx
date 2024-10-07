import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import WeatherDetail from './pages/Details/Details'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}></Route> 
        <Route path="/weather" element={<WeatherDetail/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}
export default App;
