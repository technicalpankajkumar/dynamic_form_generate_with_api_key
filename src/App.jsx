import React from 'react'
import Layout from './components/Layout'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Form from './components/pages/Form'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path='/table' element={<Layout/>}/>
        <Route path='/form/:id?' element={<Form/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
