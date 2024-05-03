import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Category from './pages/category'
import Header from './components/header'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:categoryKey' element={<Category />} />
      </Routes>
    </>
  )
}

export default App
