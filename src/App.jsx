
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './RouteLayout/Layout'

function App() {


  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Layout/>}>
         <Route index  element={<Home/>}/>
       </Route>
     </Routes>
    
    </BrowserRouter>
  )
}

export default App
