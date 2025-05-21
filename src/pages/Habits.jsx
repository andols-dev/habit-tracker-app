import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useHabits } from '../context/HabitsContext'
import HabitList from '../components/HabitList';
import { FaPlusSquare } from 'react-icons/fa'
const Habits = () => {
  const { setShowModal } = useHabits();

  return (
    <Container>
      <div className="text-center">
        <h1 className="mt-5">Welcome to the Habits Tracker</h1>
        <p>Track your habits and stay motivated!</p>
        <Button
          variant="primary"
          className="mt-3 d-flex align-items-center justify-content-center mx-auto"
          style={{ gap: '8px' }}
          onClick={() => setShowModal(true)}
        >
          <FaPlusSquare />
          <span>Add a new habit</span>
        </Button>
      </div>
      <HabitList />
    </Container>
  )
}

export default Habits