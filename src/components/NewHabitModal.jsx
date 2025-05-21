import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import NewHabitForm from './NewHabitForm'
import { useHabits } from '../context/HabitsContext'

const NewHabitModal = () => {
const { showModal, setShowModal, editingHabit } = useHabits();

  return (
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingHabit ? 'Edit Habit' : 'Add a New Habit'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <NewHabitForm />
        </Modal.Body>

      </Modal>  )
}

export default NewHabitModal