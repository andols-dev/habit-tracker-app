import React from "react";
import { Button } from "react-bootstrap";
import { useHabits } from "../context/HabitsContext";

const NewHabitForm = () => {
  const { addNewHabit, formInput, handleInputChange, setShowModal, editingHabit, updateHabit, cancelEditHabit } = useHabits();

  return (
    <form onSubmit={editingHabit ? updateHabit : addNewHabit}>
      <div className="mb-3">
        <label htmlFor="habitName" className="form-label">
          Habit Name
        </label>
        <style>
          {`
                    #habitName::placeholder,
                    #habitDescription::placeholder {
                        color: #888;
                        font-style: italic;
                        opacity: 1;
                    }
                `}
        </style>
        <input
          type="text"
          autoFocus
          placeholder="Enter habit name"
          className="form-control"
          id="habitName"
          name="name"
          value={formInput.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="habitDescription" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          placeholder="Enter habit description"
          id="habitDescription"
          name="description"
          value={formInput.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <Button variant="primary" className="me-2" type="submit">
        {editingHabit ? 'Update habit' : 'Save habit'}
      </Button>
      <Button variant="secondary" onClick={cancelEditHabit}>
        Close
      </Button>
    </form>
  );
};

export default NewHabitForm;
