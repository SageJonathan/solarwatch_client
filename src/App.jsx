import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header/Header'
import WeatherDetail from './pages/WeatherDetails'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route> 
        <Route path="/weather/:mountainId" element={<WeatherDetail/>}></Route>
        <Route path="/weather" element={<WeatherDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
