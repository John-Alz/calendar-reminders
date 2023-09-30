
import './App.scss'
import RemindersList from './components/RemindersList/RemindersList';
import RemindersForm from './components/RemindersForm/RemindersForm'
import {Routes,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import HeaderT from './components/HeaderTwo/HeaderT';
import EditPage from './components/EditPage/EditPage';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<RemindersList/>}/> */}
      <Route path='/' element={<Header/>}/>
      <Route path='/create-reminder' element={<HeaderT/>}/>
      <Route path='/edit-reminder/:id' element={<EditPage/>}/>
      <Route path='/calendar' element={<Calendar/>}/>
    </Routes>
      
    </>
  )
}

export default App
