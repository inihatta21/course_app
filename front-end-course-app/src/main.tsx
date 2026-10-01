import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import ValidateKode from './pages/ValidateKode'
import ListCourse from './pages/ListCourse'
import DetailCourse from './pages/DetailCourse'
import MateriCourse from './pages/MateriCourse'
import DetailMateriLayout from './components/layout/DetailMateriLayout'
import DashboardLayout from './components/layout/DashboardLayout'
import Profile from './pages/Profile'
import UserCourse from './pages/UserCourse'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<LandingPage />} />
          <Route path='/course' element={<ListCourse />} />
          <Route path='/course/:id' element={<DetailCourse />} />
        </Route>
        <Route path='/' element={<DetailMateriLayout />}>
          <Route path='/course/:course_id/:materi_id' element={<MateriCourse />} />
        </Route>
        <Route path='/dashboard' element={<DashboardLayout />}>
            <Route path=':id_user/profile' element={<Profile />} />
            <Route path=':id_user/course' element={<UserCourse />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/validate-otp' element={<ValidateKode />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
