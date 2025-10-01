
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './RouteLayout/Layout'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import Profile from './Pages/Profile'
import Order from './Pages/Order'
import NewMenu from './Pages/NewMenu'
function App() {


  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Layout/>}>
         <Route index  element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/menu' element={<Menu/>}/>
         <Route path='/newmenu' element={<NewMenu/>}/>
         <Route path ='/profile' element={<Profile/>}/>
         <Route path='/order' element={<Order/>}/>
       </Route>


     </Routes>
    
    </BrowserRouter>
  )
}

export default App
