
import './App.scss'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import AddPage from './pages/AddPage'
import EditPage from './pages/EditPage';

function App() {
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<RemindersList/>}/> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/create-reminder' element={<AddPage/>}/>
      <Route path='/edit-reminder/:id' element={<EditPage/>}/>
    </Routes>
      
    </>
  )
}

export default App
