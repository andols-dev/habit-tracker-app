import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import Habits from './pages/Habits'
import WeeklyView from './pages/WeeklyView'
import { Routes, Route } from 'react-router'
import NewHabitModal from './components/NewHabitModal'
import { HabitsProvider } from './context/HabitsContext'
import Toast from './components/ToastMessage'

function App() {

  return (
    <>
    <HabitsProvider>
    <Navigation />
    <Toast />
    <NewHabitModal />
    <Routes>
      <Route path="/" element={<Habits />} />
      <Route path="/weekly" element={<WeeklyView />} />
    </Routes>
    </HabitsProvider>
    </>
  )
}

export default App
