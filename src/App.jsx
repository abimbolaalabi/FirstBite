
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './RouteLayout/Layout'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
function App() {


  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Layout/>}>
         <Route index  element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/menu' element={<Menu/>}/>
       </Route>


     </Routes>
    
    </BrowserRouter>
  )
}

export default App
