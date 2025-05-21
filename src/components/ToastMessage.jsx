import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { useHabits } from '../context/HabitsContext';
import { ToastContainer } from 'react-bootstrap';

function ToastMessage() {
const { showToast, setShowToast } = useHabits();
  return (
<ToastContainer position="top-end">
        <Toast bg='success' onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>

          <Toast.Body className='text-white'>New habbit added!</Toast.Body>
        </Toast>
  </ToastContainer>
  );
}

export default ToastMessage;