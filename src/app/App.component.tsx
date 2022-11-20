
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Forum from './components/forum/Forum.component'
import Signup from './components/signup/Signup.component'
import styles from './App.module.scss'
import Login from './components/login/Login.component'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forum' element={<Forum/>}/>
          <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App